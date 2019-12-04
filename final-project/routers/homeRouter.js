const Router = require("express").Router();

const {
  createProduct,
  readAllProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/ProductController");

Router.get("/", async (req, res) => {
  let data = await readAllProduct()
  let renderHTML = ""
  data.forEach(element => {
    renderHTML = renderHTML +
      `
      <div class="item">
        <img src="${element.imgLink}" alt="">
        <p>${element.title}</p>
        <span>${element.availableSize}</span>
        <div class="price">
          
          <small>$</small>
          <b>${element.price}</b>
          <span></span>
        </div>
        <div class="buy-btn">
            Mua ne
        </div>
      </div>
    
    `;
  });
  res.render("mainPage", {
    HTML: renderHTML
  });
});


module.exports = Router;
