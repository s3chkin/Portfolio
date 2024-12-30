//hero typing text effect
const texts = ["Full Stack", "Front-end", "Back-end"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const speed = 100; // Скорост на изписване/триене

function typewriterEffect() {
  if (count === texts.length) {
    count = 0; // Връща се в началото
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typewriter").textContent = letter;

  if (letter.length === currentText.length) {
    // Изчакване преди триене
    setTimeout(() => deleteEffect(), 1300);
  } else {
    setTimeout(typewriterEffect, speed);
  }
}

function deleteEffect() {
  letter = currentText.slice(0, --index);
  document.getElementById("typewriter").textContent = letter;

  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(typewriterEffect, 700); // Пауза преди следващото писане
  } else {
    setTimeout(deleteEffect, speed);
  }
}

typewriterEffect();

//Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

//send Mail
function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // изчиства полетата
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Показва информативното съобщение
  function msg() {
    if (window.matchMedia("(max-width: 770px)").matches) {
      document.querySelector("#alert-success-mobile").style.display = "block";
      document.querySelector("#alert-success-desktop").style.display = "none";
    } else {
      document.querySelector("#alert-success-mobile").style.display = "none";
      document.querySelector("#alert-success-desktop").style.display = "block";
    }
  }

  emailjs.send("service_30gsgtz", "template_j5wfhr8", params).then(
    () => {
      msg();
    },
    (error) => {
      console.error("Error:", error);
    }
  );
}
