const dateInput = document.querySelector(".dateInput");
const outPut = document.querySelector(".output");
const calculatebtn = document.querySelector(".calculate");
const con = document.querySelector("h2");

calculatebtn.addEventListener("click", () => {
  const birthDate = new Date(dateInput.value);
  const currentDate = new Date();
  const newDate = new Date(currentDate - birthDate);

  const years = newDate.getFullYear() - 1970;
  const month = newDate.getMonth();
  const days = newDate.getDay() - 1;

  con.style.display = "block";
  outPut.innerHTML = `Your are ${years} years ${month} months ${days} days.😇`;
});
// dateInput.addEventListener("change", () => { });
