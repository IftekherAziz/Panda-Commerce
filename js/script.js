/* This is a console log that is letting me know that the script.js file is connected to the index.html
file. */
console.log("Script Js is Connected!");

/* Selecting all the h2 elements and changing their color to lightblue. */
const h2 = document.getElementsByTagName("h2");
for (i = 0; i < h2.length; i++) {
  h2[i].style.color = "lightblue";
}

/* Selecting the element with the id of backpack and changing its background color to tomato and
padding to 20px 30px. */
const backpack = document.getElementById("backpack");
backpack.style.backgroundColor = "tomato";
backpack.style.padding = "20px 30px";

/* Selecting all the elements with the class of card and changing their border radius to 30px. */
const card = document.getElementsByClassName("card");
for (i = 0; i < card.length; i++) {
  card[i].style.borderRadius = "30px";
}

/* This is an event listener that is listening for a click on the submit button. When the submit button
is clicked, the event listener will log "The submit button was clicked" to the console and prevent
the default action of the submit button. */
let submit = document.getElementById("submit");
submit.style.backgroundColor = "#FF3A88";
submit.addEventListener("click", function (event) {
  console.log("The submit button was clicked");
  event.preventDefault();
});

/* Selecting all the elements with the class of panda-btn-buy-now and adding an event listener to each
one. When the button is clicked, the event listener will remove the parent of the parent of the
button that was clicked. */
const buyNow = document.getElementsByClassName("panda-btn-buy-now");
for (let i = 0; i < buyNow.length; i++) {
  buyNow[i].addEventListener(
    "click",
    function (event) {
      event.currentTarget.parentNode.parentNode.remove();
      // event.target.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    },
    false
  );
}

/* This is an event listener that is listening for a keyup event on the input field with the id of
exampleInputEmail1. When a keyup event occurs, the event listener will store the value of the input
field in a variable called text. The event listener will then store the value of the text variable
in a variable called input and convert the value of the input variable to lowercase. The event
listener will then check to see if the value of the input variable is equal to the string "email".
If the value of the input variable is equal to the string "email", the event listener will remove
the disabled attribute from the submit button. If the value of the input variable is not equal to
the string "email", the event listener will add the disabled attribute to the submit button. */
submit.disabled = true;
document
  .getElementById("exampleInputEmail1")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    let input = text.toLowerCase();
    if (input === "email") {
      submit.removeAttribute("disabled");
    } else {
      submit.setAttribute("disabled", true);
    }
  });

  
/* This is an event listener that is listening for a mouseenter event on the element with the id of
image. When a mouseenter event occurs, the event listener will change the source of the image to the
image of the bag. This is an event listener that is listening for a mouseleave event on the element
with the id of image. When a mouseleave event occurs, the event listener will change the source of
the image to the image of the watch. */
const image = document.getElementById("image");
image.addEventListener("mouseenter", function () {
    this.src = "images/categories/bag.png";
});
image.addEventListener("mouseleave", function () {
    this.src = "images/categories/watch.png";
});


/* This is an event listener that is listening for a double click on the element with the id of
subscribe. When a double click occurs, the event listener will change the background color of the
element with the id of subscribe to orange. */
const subscribe = document.getElementById("subscribe");
subscribe.addEventListener("dblclick", function () {
  this.style.backgroundColor = "orange";
});
