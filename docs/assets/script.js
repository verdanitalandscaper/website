document.addEventListener("DOMContentLoaded",function(){

/* LOGO */

fetch("data/site.json")
.then(r=>r.json())
.then(data=>{
document.getElementById("siteLogo").src=data.logo;
});


/* PROJECTS */

fetch("data/projects.json")
.then(r=>r.json())
.then(data=>{

const grid=document.getElementById("projectGrid");

data.forEach(img=>{

const el=document.createElement("img");

el.src=img;

el.onclick=()=>openLightbox(img);

grid.appendChild(el);

});

});


/* PRODUCTS */

fetch("data/products.json")
.then(r=>r.json())
.then(data=>{

const grid=document.getElementById("productGrid");

data.forEach(p=>{

grid.innerHTML+=`
<div class="card">
<img src="${p.image}">
<p>${p.title}</p>
</div>
`;

});

});


/* EMAILJS */

emailjs.init("6rohzbSTh7BhllYdn");

document.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(
"service_x5sxxfn",
"template_499nycq",
this
)
.then(()=>{
document.getElementById("formStatus").innerText="Message sent!";
this.reset();
})
.catch(()=>{
document.getElementById("formStatus").innerText="Error sending message";
});

});


});


/* LIGHTBOX */

function openLightbox(src){

const box=document.getElementById("lightbox");

document.getElementById("lightboxImg").src=src;

box.style.display="flex";

}

document.getElementById("lightbox")
.addEventListener("click",function(){
this.style.display="none";
});


/* WHATSAPP */

function toggleWA(){

const box=document.getElementById("waBox");

box.style.display=box.style.display==="block"?"none":"block";

}