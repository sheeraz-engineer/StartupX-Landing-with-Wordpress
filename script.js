document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  if(!name||!email||!message) return alert("Please fill in all fields.");
  if(!/^\S+@\S+\.\S+$/.test(email)) return alert("Enter a valid email.");
  alert("Message sent successfully!");
  this.reset();
});

document.getElementById("menu-toggle").addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.toggle("active");
});



// Scroll animation for feature boxes
const featureBoxes = document.querySelectorAll('.feature-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

featureBoxes.forEach(box => {
  observer.observe(box);
});
