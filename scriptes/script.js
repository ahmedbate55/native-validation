//remove the defalut refresh
const form = document.querySelector(".square__of__date");
//

// get valus from user
const dayInput = document.querySelector("[data-type=day]");
const monthInput = document.querySelector("[data-type=Month]");
const yearInput = document.querySelector("[data-type=Year]");
//

// show the rsult of age
const showResult = document.querySelector(".show__result");
const showAge = document.querySelector(".show__age");
//

// show error
const dayError = document.querySelector(".show__error__of__day");

const monthError = document.querySelector(".show__error__of__month");

const yearError = document.querySelector(".show__error__of__year");

//

// show the result of information
const showYear = document.querySelector("[data-name=show__year]");
const showMonth = document.querySelector("[data-name=show__month]");
const showDay = document.querySelector("[data-name=show__day]");
//

const year = new Date().getFullYear();

const validationOfYear = () => {
  const yearValue = parseInt(yearInput.value);
  if (yearValue && yearValue <= year) {
    yearInput.style.borderColor = "";
    yearError.innerHTML = "";
    return yearValue;
  } else {
    yearInput.style.borderColor = "red";
    dayError.style.color = "red";
    yearError.innerHTML = "please enter a valid year";
    return null;
  }
};

const validationOfMonth = () => {
  const monthValue = parseInt(monthInput.value);
  if (monthValue && monthValue > 0 && monthValue <= 12) {
    monthInput.style.borderColor = "";
    monthError.innerHTML = "";
    return monthValue;
  } else {
    monthInput.style.borderColor = "red";
    monthError.style.color = "red";
    monthError.innerHTML = "please enter a valid month";
    return null;
  }
};

const validationOfDay = () => {
  const dayValue = parseInt(dayInput.value);
  if (dayValue && dayValue > 0 && dayValue <= 31) {
    dayInput.style.borderColor = "";
    dayError.innerHTML = "";
    return dayValue;
  } else {
    dayInput.style.borderColor = "red";
    yearError.style.color = "red";
    dayError.innerHTML = "please enter a valid day";
    return null;
  }
};

// calculation
const showTheAge = () => {
  const validYear = validationOfYear();
  const validMonth = validationOfMonth();
  const validDay = validationOfDay();

  if (validYear === null || validMonth === null || validDay === null) {
    showAge.innerHTML = "--";
    showYear.innerHTML = "--";
    showMonth.innerHTML = "--";
    showDay.innerHTML = "--";
    return;
  }

  const calcYear = year - validYear;
  showAge.innerHTML = calcYear;
  showYear.innerHTML = validYear;
  showMonth.innerHTML = validMonth;
  showDay.innerHTML = validDay;
};
//

showResult.addEventListener("click", showTheAge);

// prevent form refresh
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
//
