// Ürün Verileri
const urunler = [
    { id: 1, ad: "Laptop", fiyat: 794.35, img: "images/laptop.jpg" },
    { id: 2, ad: "Ceket", fiyat: 10.79, img: "images/ceket.jpg" },
    { id: 3, ad: "Kol Saati", fiyat: 40000.38, img: "images/saat.jpeg" },
    { id: 4, ad: "Vazo", fiyat: 17.00, img: "images/vazo.jpg" },
    { id: 5, ad: "Ayakkabı", fiyat: 25.90, img: "images/spor-aykb.jpeg" },
    { id: 6, ad: "Kulaklık", fiyat: 70.84, img: "images/kulaklık.avif" },
];

const sepet = [];
const urunContainer = document.getElementById("urun-container");
const sepetUrunler = document.getElementById("sepet-urunler");

// Ürünleri Dinamik Yükleme
urunler.forEach((urun) => {
    const urunKarti = document.createElement("div");
    urunKarti.classList.add("col-md-4", "d-flex", "justify-content-center");

    urunKarti.innerHTML = `
        <div class="urun-karti">
            <img src="${urun.img}" alt="${urun.ad}">
            <h5>${urun.ad}</h5>
            <p class="fiyat">₺${urun.fiyat}</p>
            <button class="btn sepete-ekle" data-id="${urun.id}">Sepete Ekle</button>
        </div>
    `;
    urunContainer.appendChild(urunKarti);
});

// Sepete Ürün Ekleme
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("sepete-ekle")) {
        const urunId = e.target.getAttribute("data-id");
        const urun = urunler.find((u) => u.id == urunId);
        sepet.push(urun);
        sepetiGuncelle();
    }
});

// Sepeti Güncelle
function sepetiGuncelle() {
    sepetUrunler.innerHTML = "";
    sepet.forEach((urun, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `
            ${urun.ad} - ₺${urun.fiyat}
            <button class="btn btn-outline-danger btn-sm urun-sil" data-index="${index}">Sil</button>
        `;
        sepetUrunler.appendChild(li);
    });
}

// Sepetten Ürün Silme
sepetUrunler.addEventListener("click", (e) => {
    if (e.target.classList.contains("urun-sil")) {
        const index = e.target.getAttribute("data-index");
        sepet.splice(index, 1);
        sepetiGuncelle();
    }
});

// Sepeti Temizleme
document.getElementById("sepetiTemizle").addEventListener("click", () => {
    sepet.length = 0;
    sepetiGuncelle();
});
