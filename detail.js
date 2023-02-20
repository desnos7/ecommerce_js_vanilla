let liens = window.location.search;

console.log(liens);
let documentId = liens.slice(4);

console.log(documentId);

async function tablette() {
  let response = await fetch("article.json");
  response = await response.json();

  let doc = response.find((element) => element._id === documentId);
  console.log(doc);
  for (let i = 0; i < doc.length; i++) {
    let card = `
    <div class="item1">
    <div class="item1_box">
      <img src="image/6e38525473499975faea29440606a5f3.jpeg" alt="" />
    </div>
    <div class="item1_box2">
      <p>macbook</p>
      <p>Description</p>
      <p>
        ${doc[i].description}
      </p>
      <p>${doc[i].prix}</p>
  
      <button>ADD CART</button>
    </div>
  </div>`;
    let container = document.querySelector(".container");
    container.innerHTML += card;
  }

}
tablette();
