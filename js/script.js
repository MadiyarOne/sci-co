function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function loginwork() {
  var a = document.getElementById("login").value;
  var b = document.getElementById("password").value;

  if (a == "Madiyar" && b == "1234") {
    window.location.href = "../index.html";
  } else {
    alert("not correct");
  }
}

$(window).on("load", function () {
  $(".overlay").fadeOut("fast");
});
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

function createMe() {
  console.log('create');
}

function testChange() {
  console.log('test change');
}

function forPullRequest_SecondTime() {
  console.log('pull request');
}