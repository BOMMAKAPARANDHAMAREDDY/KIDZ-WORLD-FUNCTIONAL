let cartValue = document.getElementById("cart-value");
let cartButton = document.getElementById("cart");
let addButton = document.getElementsByClassName("button flex space-evenly");
let items = [
    {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 59,
    },
    {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
    },

    {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
    },
    {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
    },
    {
    name: "Four Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
    },
    {
    name: "Wimpy Kid- DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
    },
    {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
    },
    {
    name: "Connect four",
    quantity: 0,
    dollars: 19,
    cents: 99,
    },
    {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 0,
    },
    {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
    },
    {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
    },
    {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
    },
    {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
    },
    {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
    }
];
function addToCart(i) {
    items[i].quantity++;
    updateCart();
}
function updateCart() {
    let cart = 0;
    for (let i = 0; i < items.length; i++) {
        cart += items[i].quantity;
    }
    cartValue.innerHTML = cart;
}
for (let i = 0; i < addButton.length; i++) {
    addButton[i].onclick = () => addToCart(i);
}

let finalDollars = 0;
let finalCents = 0;

function updatePrice() {
    let totalPriceCents = 0;
    for (let i = 0; i < items.length; i++) {
        totalPriceCents += items[i].quantity * (items[i].dollars * 100 + items[i].cents);
    }

    finalDollars = Math.floor(totalPriceCents / 100);
    finalCents = totalPriceCents % 100;
}

cartButton.onclick = () => {
    updatePrice();

    for (let i = 0; i < items.length; i++) {
        if (items[i].quantity !== 0) {
            console.log("Item name: " + items[i].name + " - Quantity: " + items[i].quantity);
        }
    }

    console.log("The total amount is " + finalDollars + "$ and " + finalCents + " cents");
};