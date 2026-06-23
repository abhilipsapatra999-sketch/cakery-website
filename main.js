const navlist = document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('navlist-active');
});

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
    const msg = input.value.trim();

    if (msg === "") return;

    const chatBody = document.getElementById("chatBody");

    chatBody.innerHTML +=
    `<div class="user-message">${msg}</div>`;

    let reply = "😊 Thanks for contacting Cakery Bakery!";

    setTimeout(() => {

        chatBody.innerHTML +=
        `<div class="bot-message">${reply}</div>`;

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
function placeOrder(product){

    const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(product);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    alert(product + " added to cart!");
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

