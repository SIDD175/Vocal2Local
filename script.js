// Mock vendor data
let vendors = [
  {
    name: "Ramesh Sabziwala",
    type: "Vegetables",
    distance: "200 m",
    active: true
  },
  {
    name: "Shyam Fruit Seller",
    type: "Fruits",
    distance: "300 m",
    active: true
  },
  {
    name: "Chai Point",
    type: "Tea",
    distance: "400 m",
    active: false
  }
];

// Load vendors on user page
const vendorList = document.getElementById("vendorList");

if (vendorList) {
  vendors.forEach(vendor => {
    const card = document.createElement("div");
    card.className = "vendor-card" + (vendor.active ? "" : " inactive");

    card.innerHTML = `
      <h3>${vendor.name}</h3>
      <span>${vendor.type} • ${vendor.distance}</span><br>
      <strong>${vendor.active ? "ACTIVE NOW" : "OFFLINE"}</strong>
    `;

    vendorList.appendChild(card);
  });
}

// Vendor toggle logic
let isActive = false;

function toggleVendor() {
  const statusText = document.getElementById("statusText");
  const button = document.getElementById("toggleBtn");

  isActive = !isActive;

  if (isActive) {
    statusText.textContent = "You are LIVE";
    button.textContent = "Go Offline";
    button.classList.add("offline");
  } else {
    statusText.textContent = "You are OFFLINE";
    button.textContent = "I am here";
    button.classList.remove("offline");
  }
}
