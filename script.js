function scrollCarousel(direction) {
    const carousel = document.getElementById("photo-carousel");
    const amount = 300;

    carousel.scrollBy({
        left: direction === "right" ? amount : -amount,
        behavior: "smooth"
    });
}

function showSection(section) {
    document.getElementById("subpage-overlay").classList.remove("hidden");

    const title = {
        "familia": "Família",
        "maria-luiza": "Maria Luiza",
        "miguel": "Miguel (Afilhado)",
        "futebol": "Futebol",
        "galeria": "Galeria"
    }[section];

    document.getElementById("subpage-title").textContent = title;

    const gallery = document.getElementById("subpage-gallery");
    gallery.innerHTML = "";

    let totalFotos = 10;
    if (section === "futebol") totalFotos = 6;

    for (let i = 1; i <= totalFotos; i++) {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/400?${section}${i}`;
        img.classList.add("sub-img");
        gallery.appendChild(img);
    }
}

function closeSubpage() {
    document.getElementById("subpage-overlay").classList.add("hidden");
}
