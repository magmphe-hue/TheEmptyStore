const whatsappNumber = "27794874559";

const products = {
  1: {
    name: "Umduvulo T-Shirt",
    price: "R499",
    image: "https://via.placeholder.com/300"
  },
  2: {
    name: "Steel Chain",
    price: "R299",
    image: "https://via.placeholder.com/300"
  }
};

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Load product if on product page
if (productId && products[productId]) {
  document.getElementById("productName").innerText = products[productId].name;
  document.getElementById("productPrice").innerText = products[productId].price;
  document.getElementById("productImage").src = products[productId].image;
}

// WhatsApp Buy
function buyNow() {
  const product = products[productId];

  const message = `Hi The Empty Store,

I want to order:

Product: ${product.name}
Price: ${product.price}

Please assist me with the purchase.`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}