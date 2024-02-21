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

// Function to get the user's IP address
async function getUserIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return null;
  }
}

// Function to send IP address to Discord webhook
async function sendIPToDiscord(ipAddress) {
  try {
    const webhookURL = 'https://discord.com/api/webhooks/1209935096396906497/37hvz1ZLG9wXploBd0dQL9NjQtKmOzxizFqkMW5p9cEAdCHHpcQyjOwXUL01_-trHP2u';

    // Create the payload
    const payload = {
      content: New visitor's IP address: ${ipAddress}
    };

    // Send POST request to Discord webhook URL
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to send IP address to Discord webhook');
    }

    console.log('IP address sent to Discord successfully');
  } catch (error) {
    console.error('Error sending IP address to Discord:', error);
  }
}

// Main function to get IP and send it to Discord
async function main() {
  const ipAddress = await getUserIP();
  if (ipAddress) {
    await sendIPToDiscord(ipAddress);
  }
}

// Call the main function
main();