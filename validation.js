// validation script here

const regularExpressions = {
  username: /^\w{5,12}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{11}$/,
  slug: /^[a-z\d-]{8,20}$/,
};

const inputElements = [...document.querySelectorAll("input")];

inputElements.forEach((inputElement) => {
  inputElement.addEventListener("keyup", handleChange);
});

function handleChange() {
  validate(regularExpressions[this.name], this.value)
    ? (this.classList.remove("invalid"), this.classList.add("valid"))
    : (this.classList.remove("valid"), this.classList.add("invalid"));
}

function validate(regex, string) {
  return regex.test(string);
}
