const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector(".topbar nav");
menuBtn.addEventListener("click",()=>{nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",nav.classList.contains("open"))});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
window.addEventListener("scroll",()=>{const y=window.scrollY;document.querySelectorAll(".blob").forEach((b,i)=>b.style.transform=`translateY(${y*(i?-.04:.05)}px)`)},{passive:true});