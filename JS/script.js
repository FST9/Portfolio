//navlinks togglebar functionality
function toggleBar() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}
//Blog section filter functionality
// function showall() {
//   document.getElementById("aboutp").style.display = "block";
//   document.getElementById("servicesp").style.display = "block";
//   document.getElementById("contactp").style.display = "block";
//   document.getElementById("projectsp").style.display = "block";
// }
// function showaboutp() {
//   document.getElementById("aboutp").style.display = "block";
//   document.getElementById("servicesp").style.display = "none";
//   document.getElementById("contactp").style.display = "none";
//   document.getElementById("projectsp").style.display = "none";
// }
// function showservicesp() {
//   document.getElementById("aboutp").style.display = "none";
//   document.getElementById("servicesp").style.display = "block";
//   document.getElementById("contactp").style.display = "none";
//   document.getElementById("projectsp").style.display = "none";
// }
// function showprojectsp() {
//   document.getElementById("aboutp").style.display = "none";
//   document.getElementById("servicesp").style.display = "none";
//   document.getElementById("contactp").style.display = "none";
//   document.getElementById("projectsp").style.display = "block";
// }
// function showcontactp() {
//   document.getElementById("aboutp").style.display = "none";
//   document.getElementById("servicesp").style.display = "none";
//   document.getElementById("contactp").style.display = "block";
//   document.getElementById("projectsp").style.display = "none";
// }
