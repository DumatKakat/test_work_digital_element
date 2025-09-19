const form = document.querySelector("#modal_form");
const popUp = document.querySelector("#pop-up");
const regex = /(\w)+(@)+(\w*)+(\.(com|yandex|ru))/gm;

// Запрос выполняется только с включенным VPN
async function send(data) {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    title: "Test",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = form.elements;
  data = Array.from(data);
  const formData = [];
  data.pop();
  data.forEach((element) => {
    const { name, value } = element;
    if (value === null || value === undefined || value === "") {
      element.nextElementSibling.style.display = "block";
      element.nextElementSibling.innerHTML = "Поле " + name + " не заполнено";
    } else {
      if (name === "email" && !regex.test(value)) {
        element.nextElementSibling.style.display = "block";
        element.nextElementSibling.innerHTML = "Не корректный " + name;
      } else {
        formData.push({ name: name, value: value });
        element.nextElementSibling.style.display = "none";
      }
    }
  });
  if (formData.length === data.length) {
    send(formData)
      .then((response) => {
        if (response.ok) {
          popUp.classList.add("pop-up_isActive");
          setTimeout(() => {
            popUp.classList.remove("pop-up_isActive");
          }, 5000);
        }
        return null;
      })
      .catch((error) => {
      });
  }
});
