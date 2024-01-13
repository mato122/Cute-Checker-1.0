const userNameField = document.getElementById("name")

const validateEmptyField = (e) => {
    const field = e.target;
    const fieldValue =e.target.value;
    if (fieldValue == 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Username required";
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

userNameField.addEventListener("blur", () => validateEmptyField);