/* =====================================
   HAKAN AVCI PORTFOLIO
   MAIN JAVASCRIPT
===================================== */


document.addEventListener("DOMContentLoaded", function(){



/* =========================
   ACTIVE MENU
========================= */


const currentPage = window.location.pathname.split("/").pop();


document.querySelectorAll("nav a").forEach(link => {


    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }


});




/* =========================
   SCROLL ANIMATION
========================= */


const animatedItems = document.querySelectorAll(
".feature-card, .industry, .step, .card, .project-card"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.style.opacity="1";
        entry.target.style.transform="translateY(0)";

    }


});


},{
threshold:0.15

});



animatedItems.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .7s ease";


observer.observe(item);


});




/* =========================
   MOBILE MENU PREPARATION
========================= */


const nav = document.querySelector("nav ul");


if(nav){

console.log("Navigation loaded");

}




/* =========================
   YEAR UPDATE
========================= */


const year = document.querySelector(".year");


if(year){

year.textContent = new Date().getFullYear();

}



});