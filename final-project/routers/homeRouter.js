const Router = require("express").Router();
const {
  createProduct,
  readAllProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/ProductController");

Router.get("/", (req, res) => {
  res.render("mainPage", {
    sku: "new main page",
    title: "new main page"
  });
});
Router.get("/create-product", async (req, res) => {
  let san_pham_moi = {
    sku: "ADT" + Math.floor(Math.random() * 100000),
    title: "Ao dai tay cuc xin",
    description: `ao dep vl`,
    availableSize: [`S`, `XS`, `XXXXSSS`],
    style: `kin dao`,
    price: Math.floor(Math.random() * 100000),
    installments: Math.floor(Math.random() * 100),
    currencyID: "USD",
    currencyFormat: "$",
    isShippingFree: true,
    imgLink: "day la cai link anh"
  };
  await createProduct(san_pham_moi);
  res.render("mainPage", {
    sku: san_pham_moi.sku,
    title: san_pham_moi.title
  });
});
Router.get("/read-product", (req, res) => {
  res.render("mainPage");
});
Router.get("/update-product", (req, res) => {
  res.render("mainPage");
});
Router.get("/delete-product", (req, res) => {
  res.render("mainPage");
});

module.exports = Router;
