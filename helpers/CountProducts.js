const { Product } = require("../models/product");

const getAmountOfProducts = async (  ) => {

    const counter = await Product.count();
    return counter;
};

module.exports = {
    getAmountOfProducts
}