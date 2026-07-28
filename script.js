
const navlist = document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');

if (hamburger && navlist) {
    hamburger.addEventListener('click', () => {
        navlist.classList.toggle('navlist-active');
    });
}

function toggleChat() {

    const chatbot = document.getElementById("chatbot");

    if (chatbot.style.display === "block") {
        chatbot.style.display = "none";
    } else {
        chatbot.style.display = "block";
    }
}

function sendMessage() {

    const input = document.getElementById("userInput");
    const msg = input.value.trim().toLowerCase();

    if (msg === "") return;

    const chatBody = document.getElementById("chatBody");

    // Show user message
    chatBody.innerHTML += `
        <div class="user-message">${msg}</div>
    `;

    let reply = "";

    if (msg.includes("hello") || msg.includes("hi")) {
        reply = "👋 Hello! Welcome to Velvet Crumbs Bakery. How can I help you?";
    }
    else if (msg.includes("cake")) {
        reply = "🎂 We have Birthday Cake, Chocolate Cake, Rose Cake, Cupcakes and Custom Cakes.";
    }
    else if (msg.includes("price")) {
        reply = "💰 Our cake prices start from ₹30.";
    }
    else if (msg.includes("birthday")) {
        reply = "🎉 Yes! We make beautiful Birthday Cakes. You can also order custom designs.";
    }
    else if (msg.includes("delivery")) {
        reply = "🚚 Yes, we provide Home Delivery within the city.";
    }
    else if (msg.includes("location") || msg.includes("address")) {
        reply = "📍 We are located at Nayapali, Bhubaneswar.";
    }
    else if (msg.includes("contact") || msg.includes("phone")) {
        reply = "📞 Contact Number: 7853054605";
    }
    else if (msg.includes("time") || msg.includes("open")) {
        reply = "🕘 We are open every day from 9:00 AM to 9:00 PM.";
    }
    else if (msg.includes("cookie")) {
        reply = "🍪 Fresh Cookies are available for ₹30.";
    }
    else if (msg.includes("muffin")) {
        reply = "🧁 Fresh Muffins are available for ₹150.";
    }
    else if (msg.includes("sandwich")) {
        reply = "🥪 Veg Sandwich is available for ₹250.";
    }
    else if (msg.includes("thank")) {
        reply = "😊 You're welcome! Have a sweet day.";
    }
    else {
        reply = "🤖 Sorry, I didn't understand. Please ask about cakes, prices, delivery, location, contact or opening hours.";
    }

    // Show bot reply
    setTimeout(() => {

        chatBody.innerHTML += `
            <div class="bot-message">${reply}</div>
        `;

        chatBody.scrollTop = chatBody.scrollHeight;

    }, 500);

    input.value = "";
}
const bakeryItems = [
    {
        name: "Birthday Cake",
        price: "₹350",
        image: "photo/birthday cake.jpg"
    },
    {
        name: "Muffins",
        price: "₹150",
        image: "photo/muffins.jpg"
    },
    {
        name: "Cookies",
        price: "₹30",
        image: "photo/cookies.jpg"
    },
    {
        name: "Sandwich",
        price: "₹250",
        image: "photo/sandwise.jpg"
    }
];

const menuContainer =
document.getElementById("menuContainer");

if(menuContainer){

    bakeryItems.forEach(item => {

        menuContainer.innerHTML += `
            <div class="card" data-type="item">

                <div class="image-part">
                    <img src="${item.image}">
                </div>

                <div class="details">
                    <h4>${item.price}</h4>
                    <h4>${item.name}</h4>
                </div>

            </div>
        `;
    });

}
function showSuccess(msg){

    const success =
    document.getElementById("successMessage");

    success.innerHTML = msg;
    success.style.display = "block";

    setTimeout(() => {
        success.style.display = "none";
    }, 2000);
}
function addToCart(product, price){
    alert("Button Clicked");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: product,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    showSuccess(product + " Added To Cart");
}
function placeOrder(product){

    let orders =
    JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(product);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    showSuccess("🎉 Order Placed Successfully!");

    setTimeout(() => {
        window.location.href = "order-success.html";
    }, 1500);
}
const subscribeForm =
document.getElementById("subscribeForm");

if(subscribeForm){

subscribeForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    localStorage.setItem(
        "subscriber",
        email
    );

    alert("Subscribed Successfully!");
});

}

function searchProducts(){

    let input =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card => {

        let productName =
        card.querySelector("h4:last-child")
        .innerText.toLowerCase();

        if(productName.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}

const acc =
document.querySelectorAll(".accordion");

acc.forEach(btn => {

    btn.addEventListener("click", () => {

        const panel =
        btn.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }

    });

});

