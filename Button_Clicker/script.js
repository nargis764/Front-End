const logButton = document.querySelector(".login-btn");

const myFunction = () => {   
    logButton.innerText = "Logout";  
}
const disappear = (element) => {
 //   element.style.display = "none";
 element.remove();
}
