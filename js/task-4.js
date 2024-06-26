const formSubmit = document.querySelector("form.login-form")
formSubmit.addEventListener("submit", submitAction);
function submitAction(event) {
    event.preventDefault();
    const form = event.target;
    const info = {
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim(),
    };

    if (info.email === "" || info.password === "") {
        return alert("All form fields must be filled in");
    } 

    console.log(info);
    formSubmit.reset();
}