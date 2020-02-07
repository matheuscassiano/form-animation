const btnlogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnlogin.addEventListener("click", (e) => {
	e.preventDefault();
	form.classList.add("form-hide");
})