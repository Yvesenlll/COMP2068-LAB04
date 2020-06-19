const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
  console.log(req.params);
  const product = await Product.findById(req.params.id);
  res.render(`${viewPath}/show`, {
    pageTitle: product.name,
    product: product
  });
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {
  console.log(`Product body: ${JSON.stringify(req.body, null, 2)}`);

  try {
      const productID = await Product.create(req.body);        
      console.log(productID.id);
      console.log(productID.description);
      res.redirect(`/products/${productID.id}`);
  } catch (error) {
      console.error(error);
  }
};