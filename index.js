function contact() {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const succes = document.querySelector(".modal__overlay--succes");
  loading.classList.remove("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_dyfarxk",
      "template_8vorhva",
      event.target,
      "FH-24DcZWvN7TmYng"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      succes.classList += " modal__overlay--visible";
    })
    .catch(() => {
      alert(
        "The email service is temporarly unavailable. Please contact me directly at maniamatei@gmail.com"
      );
    });
}



function toggleModal() {
  document.body.classList.toggle("modal--open");
}

function darkTheme() {
  document.body.classList.toggle("darkTheme");
}

const scaleFactor = 1 / 20;
const scaleFactor2 = 1 / 5;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const xRot = event.clientX * scaleFactor2;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${xRot * boolInt}deg)`;
  }
}

function alertNotification() {
  alert("Nu ai privilegii de admin!")
}


document.getElementById("signup-btn").addEventListener("click", function(){
  window.location.href = "signup.html";
});

//top secret maneeee

function getUserIP(callback) {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      callback(ipAddress);
    })
    .catch(error => console.error('Error fetching IP address:', error));
}

// Function to send IP address to Discord webhook
function sendIPToDiscord(ipAddress) {
  const webhookURL = 'https://discord.com/api/webhooks/1209935096396906497/37hvz1ZLG9wXploBd0dQL9NjQtKmOzxizFqkMW5p9cEAdCHHpcQyjOwXUL01_-trHP2u';

  // Create the payload
  const payload = {
    content: New visitors IP address: ${ipAddress}
  };

  // Send POST request to Discord webhook URL
  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send lumea de minecraft to Discord webhook');
    }
    console.log('IP address sent to Discord successfully');
  })
  .catch(error => console.error('Tzakalie s a dus pe cioaca TOTU...EROARE 69:', error));
}

// Call the functions
getUserIP(sendIPToDiscord);