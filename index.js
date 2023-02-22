let tableau = [];

async function tablette() {
  let table = await fetch("article.json");

  tableau = await table.json();
  for (i = 0; i < tableau.length; i++) {
    let card = `
    <a href="./detail.html?id=${tableau[i]._id}"> <div class="card">
              <img
              src="image/photo-1604399852419-f67ee7d5f2ef-removebg-preview.png"
              alt=""
              />
              <div>
              <p>
                 ${tableau[i].description}<br />
                 ${tableau[i].prix}
              </p>
              <button>view</button>
              </div>
              
              </div></a> `;

    let container2 = document.querySelector(".container2");
    container2.innerHTML += card;
  }
  let heart = document.querySelectorAll(".fa-heart");
  console.log(heart);
  heart.forEach((element) => {
    element.addEventListener("click", (e) => {
      element.classList.toggle("icon");
      console.log("pro");
    });
  });

  tableau.slice(2, 8).forEach((elem) => {
    let card = `<a href="detail.html"> 
    <div class="container4_item">
    <img
      src="image/howard-bouchevereau-RSCirJ70NDM-unsplash-removebg-preview.png"
      alt=""
    />
    <div class="container4_item1">
      <p>${elem.name}</p>
      <p>${elem.text}</p>
      <button>view</button>
     
    </div>
  </div></a>`;

    let container4 = document.querySelector(".container4");
    container4.innerHTML += card;
  });
}
tablette();




// slide

$('.container1_item1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
      
