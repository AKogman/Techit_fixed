let products = [
    {
        id: 2536,
        name: "Full Screens Set",
        price: 5000,
        category: "Screen",
        description: "Full Screens Set",
        image: "https://www.e-computers.co.uk/wp-content/uploads/2022/01/seyed-sina-fazeli-XP9JF6jyRGc-unsplash.jpg"
    },
    {
        id: 2537,
        name: "Omen Gaming Laptop",
        price: 4228,
        category: "Laptops",
        description: "The Good Old Friend Of The Gamers, HP Omen.",
        image: "https://www.pcworld.com/wp-content/uploads/2023/04/hp_omen_laptops_midair-100724990-orig.jpg?quality=50&strip=all"
    },
    {
        id: 2538,
        name: "Combination Parts For Gameing",
        price: 7360,
        category: "Computer",
        description: "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro and more parts",
        image: "https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3667472-gaming-pc-build-2020--how-to-build-a-gaming-pc-from-scratch-promothumb2.jpg"
    }
];

function showCards() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML += `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img src="${products[i].image}" class="card-img-top" alt="${products[i].name}">
                    <div class="card-body">
                        <h5 class="card-title">${products[i].name}</h5>
                        <p class="card-text">${products[i].category}</p>
                        <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100" onclick="setModal(${i})">See more</a>
                    </div>
                </div>
            </div>`;
    }
}

showCards();

function setModal(index) {
    document.getElementById("title").innerText = products[index].name;
    document.getElementById("mbody").innerHTML = `
        <p><b>Serial Number:</b> ${products[index].id}</p>
        <p><b>Category:</b> ${products[index].category}</p>
        <p><b>Description:</b> ${products[index].description}</p>
        <h4 class="text-end">Price: ${products[index].price}</h4>`;
}
