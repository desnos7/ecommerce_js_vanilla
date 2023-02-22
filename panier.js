let produitStorage = JSON.parse(localStorage.getItem("produit"));

console.log(produitStorage);

function affichePanier() {
  if (produitStorage === null) {
    
  } else {
    for (let i = 0; i < produitStorage.length; i++) {
      let panier = `
            <div class="item2"  id="${produitStorage[i].id_produit}">
        <img src="${produitStorage[i].image}" alt="" />

        <p>${produitStorage[i].name}</p>
        <p>${produitStorage[i].prix_produit}<button>suprimer</button> </p>
        

        <i class="fa-solid fa-xmark"></i>
      </div>   `;
      let container = document.querySelector(".container");
      container.innerHTML += panier;
    }
  }

  let icon = document.querySelectorAll("button");

  console.log(icon);
  for (k = 0; k < icon.length; k++) {
    icon[k].addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.target.closest(".item2").id;
      console.log(id);

      produitStorage = produitStorage.filter(
        (element) => element.id_produit !== id
      );

      localStorage.setItem("produit", JSON.stringify(produitStorage));

     window.location.href = "panier.html";
    });
  }
}

affichePanier();
