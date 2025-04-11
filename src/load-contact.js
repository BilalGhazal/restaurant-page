function loadContact() {
    const body = document.querySelector("body");
    body.classList = "";
    body.classList.add("body-otherpage");

    const mainContainer = document.querySelector("#content");

    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const form = document.createElement("form");

    const header = document.createElement("p");
    header.textContent = "Contact Us";

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("form-item");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    nameLabel.for = "name";
    nameLabel.textContent = "Name:"
    nameInput.type = "text";
    nameInput.id = "name";
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);


    const emailDiv = document.createElement("div");
    emailDiv.classList.add("form-item");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    emailLabel.for = "email";
    emailLabel.textContent = "E-mail:"
    emailInput.type = "email";
    emailInput.id = "email";
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("form-item");
    const phoneLabel = document.createElement("label");
    const phoneInput = document.createElement("input");
    phoneLabel.for = "phone";
    phoneLabel.textContent = "Phone Number:"
    phoneInput.type = "tel";
    phoneInput.id = "phone";
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneInput);

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("form-item");
    const messageLabel = document.createElement("label");
    const messageInput = document.createElement("textarea");
    messageLabel.for = "message";
    messageLabel.textContent = "Your message:"
    messageInput.id = "message";
    messageInput.rows = "10";
    messageDiv.appendChild(messageLabel);
    messageDiv.appendChild(messageInput);

    


    form.appendChild(nameDiv);
    form.appendChild(emailDiv);
    form.appendChild(phoneDiv);
    form.appendChild(messageDiv);
    formContainer.appendChild(header);
    formContainer.appendChild(form);
    mainContainer.appendChild(formContainer);
}


export { loadContact };