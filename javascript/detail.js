let liens = window.location.search;

console.log(liens);
let documentId = liens.slice(4);

console.log(documentId);

async function tablette() {
  let response = await fetch("article.json");
  response = await response.json();

  let doc = response.find((element) => element._id === documentId);

  let card = `
    <div class="item1">
    <div class="item1_box">
      <img src="${doc.image}" alt="" />
    </div>
    <div class="item1_box2">
      <p>${doc.name}</p>
      <p>Description</p>
      <p>
        ${doc.description}
      </p>
      <p>${doc.prix}$</p>
  
      <button >ADD CART</button>
    </div>
  </div>`;
  let container = document.querySelector(".container");
  container.innerHTML = card;
  let button = document.querySelector("button");
  button.addEventListener("click", (e) => {
    e.preventDefault;
    let storageDonne = {
      name: doc.name,
      id_produit: doc._id,
      prix_produit: doc.prix,
    };
    console.log(storageDonne);

    // recuperation variable storage

    let produitStorage = JSON.parse(localStorage.getItem("produit"));

    console.log(produitStorage);

    if (produitStorage) {
      produitStorage.push(storageDonne);
      produitSt = localStorage.setItem(
        "produit",
        JSON.stringify(produitStorage)
      );
      console.log(produitStorage);
    } else {
      produitStorage = [];
      produitStorage.push(storageDonne);
      produitSt = localStorage.setItem(
        "produit",
        JSON.stringify(produitStorage)
      );
      console.log(produitStorage);
    }
  });
}
tablette();
