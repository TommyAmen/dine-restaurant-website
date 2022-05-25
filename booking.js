const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const num = document.getElementById("num");
let inputs = document.querySelectorAll("input");
const form = document.querySelector(".form");
const reserve = document.querySelector(".reserve");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameRequired = document.querySelector(".name-required");
const emailRequired = document.querySelector(".email-required");
const dateIncomplete = document.querySelector(".date-incomplete");
const timeIncomplete = document.querySelector(".time-incomplete");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const dateText = document.getElementById("date-text");
const timeText = document.getElementById("time-text");
const select = document.querySelector("select");

decrease.addEventListener("click", () => {
  if (num.innerHTML <= 0) {
    return;
  } else {
    num.innerHTML = num.innerHTML - 1;
  }
});

increase.addEventListener("click", () => {
  num.innerHTML = parseInt(num.innerHTML) + 1;
});

inputs = Array.from(inputs);
inputs.forEach((input) => {
  form.addEventListener("submit", () => {
    if (!input.checkValidity()) {
      input.classList.add("invalid");
    }
  });
});

nameInput.addEventListener("focusout", () => {
  if (nameInput.value === "") {
    nameRequired.style.display = "block";
    nameInput.style.borderBottom = "1px solid red";
    nameInput.classList.add("invalid");
  } else {
    nameRequired.style.display = "none";
    nameInput.style.borderBottom = "1px solid black";
    nameInput.classList.remove("invalid");
  }
});

emailInput.addEventListener("focusout", () => {
  if (emailInput.value === "") {
    emailRequired.style.display = "block";
    emailInput.style.borderBottom = "1px solid red";
    emailInput.classList.add("invalid");
  } else {
    emailRequired.style.display = "none";
    emailInput.style.borderBottom = "1px solid black";
    emailInput.classList.remove("invalid");
  }
});

day.addEventListener("focusout", () => {
  if (day.value === "") {
    timeIncomplete.style.display = "block";
    dateText.style.color = "red";
    day.style.borderBottom = "1px solid red";
    day.classList.add("invalid");
  } else {
    timeIncomplete.style.display = "none";
    dateText.style.color = "black";
    day.style.borderBottom = "1px solid black";
    day.classList.remove("invalid");
  }
});

month.addEventListener("focusout", () => {
  if (month.value === "") {
    timeIncomplete.style.display = "block";
    dateText.style.color = "red";
    month.style.borderBottom = "1px solid red";
    month.classList.add("invalid");
  } else {
    timeIncomplete.style.display = "none";
    dateText.style.color = "black";
    month.style.borderBottom = "1px solid black";
    month.classList.remove("invalid");
  }
});

year.addEventListener("focusout", () => {
  if (day.value === "" || month.value === "" || year.value === "") {
    timeIncomplete.style.display = "block";
    dateText.style.color = "red";
    year.style.borderBottom = "1px solid red";
    year.classList.add("invalid");
  } else {
    timeIncomplete.style.display = "none";
    dateText.style.color = "black";
    year.style.borderBottom = "1px solid black";
    year.classList.remove("invalid");
  }
});

hour.addEventListener("focusout", () => {
  if (hour.value === "") {
    dateIncomplete.style.display = "block";
    timeText.style.color = "red";
    hour.style.borderBottom = "1px solid red";
    hour.classList.add("invalid");
  } else {
    dateIncomplete.style.display = "none";
    timeText.style.color = "black";
    hour.style.borderBottom = "1px solid black";
    hour.classList.remove("invalid");
  }
});

minute.addEventListener("focusout", () => {
  if (minute.value === "") {
    dateIncomplete.style.display = "block";
    timeText.style.color = "red";
    minute.style.borderBottom = "1px solid red";
    minute.classList.add("invalid");
  } else {
    dateIncomplete.style.display = "none";
    timeText.style.color = "black";
    minute.style.borderBottom = "1px solid black";
    minute.classList.remove("invalid");
  }
});

reserve.addEventListener("click", () => {
  if (minute.value === "") {
    dateIncomplete.style.display = "block";
    timeText.style.color = "red";
    minute.style.borderBottom = "1px solid red";
    minute.classList.add("invalid");
  }
  if (hour.value === "") {
    dateIncomplete.style.display = "block";
    timeText.style.color = "red";
    hour.style.borderBottom = "1px solid red";
    hour.classList.add("invalid");
  }
  if (day.value === "" || month.value === "" || year.value === "") {
    timeIncomplete.style.display = "block";
    dateText.style.color = "red";
    year.style.borderBottom = "1px solid red";
    year.classList.add("invalid");
  }
  if (month.value === "") {
    timeIncomplete.style.display = "block";
    dateText.style.color = "red";
    month.style.borderBottom = "1px solid red";
    month.classList.add("invalid");
  }
  if (day.value === "") {
    timeIncomplete.style.display = "block";
    dateText.style.color = "red";
    day.style.borderBottom = "1px solid red";
    day.classList.add("invalid");
  }
  if (emailInput.value === "") {
    emailRequired.style.display = "block";
    emailInput.style.borderBottom = "1px solid red";
    emailInput.classList.add("invalid");
  }
  if (nameInput.value === "") {
    nameRequired.style.display = "block";
    nameInput.style.borderBottom = "1px solid red";
    nameInput.classList.add("invalid");
  }
});
