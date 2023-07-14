// Get the slider element
const slider = document.getElementById("myRange");

// Get the value display elements
const priceDisplay = document.getElementById("price");
const viewsDisplay = document.getElementById("views");

// Get the toggle element
const toggle = document.getElementById("myToggle");

// Set initial values
let initialValue = 16.00;
let sliderValue = parseInt(slider.value);
let price = calculatePrice(initialValue, sliderValue);
let views = calculateViews(100000, sliderValue);

// Initialize the value display elements
priceDisplay.textContent = formatPrice(price);
viewsDisplay.textContent =  formatViews(views);

// Set initial values for the toggle
toggle.addEventListener("change", function() {
  if (toggle.checked) {
    initialValue = 16.00 - (16.00 * 0.25);
  } else {
    initialValue = 16.00;
  }

  // Update the slider values based on the new initial value
  sliderValue = parseInt(slider.value);
  price = calculatePrice(initialValue, sliderValue);
  priceDisplay.textContent = formatPrice(price);
});

// Update the values when the slider changes
slider.addEventListener("input", function() {
  sliderValue = parseInt(this.value);
  price = calculatePrice(initialValue, sliderValue);
  views = calculateViews(100000, sliderValue);

  priceDisplay.textContent = formatPrice(price);
  viewsDisplay.textContent = formatViews(views);
});

// Update the slider's background gradient
slider.oninput = function() {
  const fillTrackPct = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${fillTrackPct}%, hsl(224, 65%, 95%) ${fillTrackPct}%, hsl(224, 65%, 95%) 100%)`;
};

// Helper functions
function calculatePrice(initialValue, sliderValue) {
  return initialValue * (sliderValue / 100);
}

function calculateViews(maxViews, sliderValue) {
  return maxViews * (sliderValue / 100);
}

function formatPrice(price) {
  return  "$" + price.toFixed(2);
}

function formatViews(views) {
  return views.toLocaleString();
}
