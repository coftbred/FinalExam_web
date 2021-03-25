// https://fakestoreapi.com/products

let imgProduct = document.querySelectorAll(".col-md-3");
let imgPost = document.querySelectorAll(".col-sm-3");
let imgPost2 = document.querySelectorAll(".col-3");
getImg();
function getImg() {
  let url = "https://fakestoreapi.com/products";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (this.status == 200) {
      let output = "";
      let out2 = "";
      let results = JSON.parse(this.responseText);
      results.forEach((item, i) => {
        output = `
        <img src='${item.image}' class='img-fluid' width='300px'>
        `;
        out2 = `
        <p> ${item.title} </p>
        <button type='button' name='button' class='btn btn-primary'>Read More</button>
        `;
      });
      imgProduct.forEach((item, i) => {
        item.innerHTML = output;
      });
      imgPost.forEach((item, i) => {
        item.innerHTML = output;
      });
      imgPost2.forEach((item, i) => {
        item.innerHTML = out2;
      });

    };
  }
  xhr.send();
}
