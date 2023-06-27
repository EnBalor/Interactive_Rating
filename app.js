function setValue(value) {
    localStorage.setItem("ratingValue", value + 1)
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
        if (i === value) {
            buttons[i].classList.add("click");
        } else {
            buttons[i].classList.remove("click");
        }
    }

    
}

document.addEventListener("DOMContentLoaded", function() {
    var ratingSpan = document.getElementById("ratingValue");
    var selectedValue = localStorage.getItem("ratingValue");
    ratingSpan.innerText = selectedValue;
  })

function hoverButton(buttonIndex) {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
      if (i === buttonIndex - 1) {
        buttons[i].classList.add("active");
      } else if(i === buttonIndex + 1) {
        buttons[i].classList.add("active");
      } else {
        buttons[i].classList.add("hover");
      }
    }
  }

function resetButton(buttonIndex) {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("hover");
      if (i === buttonIndex - 1) {
        buttons[i].classList.remove("active");
      } else if (i === buttonIndex + 1) {
        buttons[i].classList.remove("active");
      }
    }
  }