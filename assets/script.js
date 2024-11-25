const hamMenu = document.querySelector(".hamMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

    
// header animation

document.addEventListener('scroll', () => {
  const navbar = document.querySelector('#navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// home count animation

const counts = document.querySelectorAll(".count");
const duration = 3000;  // Duration in milliseconds (3 seconds)

counts.forEach((counter) => {
  const target = Number(counter.getAttribute("data-target"));
  const start = Number(counter.innerText);
  const range = target - start;
  const startTime = Date.now();  // Record the start time

  function updateCounter() {
    const elapsedTime = Date.now() - startTime;  // Time elapsed since start
    const progress = Math.min(elapsedTime / duration, 1);  // Ensure progress doesn't exceed 100%
    const currentValue = Math.floor(progress * range + start);  // Calculate the current value

    counter.innerText = currentValue;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);  // Continue updating until progress reaches 1 (100%)
    } else {
      counter.innerText = target;  // Ensure the final value matches the target exactly
    }
  }

  updateCounter();
});



// get involved

document.getElementById('payment-form').addEventListener('submit', function (event) {
  // Prevent form submission for validation
  event.preventDefault();

  // Collecting form data
  const amount = document.getElementById('amount').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const cardNumber = document.getElementById('card_number').value;
  const expiry = document.getElementById('expiry').value;
  const cvv = document.getElementById('cvv').value;

  // Simple validation
  if (!amount || !name || !email || !phone || !cardNumber || !expiry || !cvv) {
    alert('Please fill in all required fields.');
    return;
  }

  // Proceed with form submission
  this.submit();
});