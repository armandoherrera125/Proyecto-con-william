const { request, response } = require("express");
//const { getAmountOfProducts } = require("../helpers/CountProducts");
//const {Product} = require('../models/product');
const productsGet = async( req = request, res = response ) => {
    //const products = await Product.findAll();
    //const algo = await getAmountOfProducts();
    //console.log(typeof algo);
    //console.log(products);
    res.status(200).json(
        {
            msg:'Working on products'
        }
    );
}
// const productCreate = async( req = request, res = response ) => {
//     const { name, price } = req.body;
//     const amountOfProducts = await getAmountOfProducts();
//     const id = amountOfProducts + 1;
//     try {
//         const creatingProduct = await Product.create({
//             id,
//             name,
//             price
//         });
//         res.status(201).json({
//             msg: 'Product created successfully',
//             creatingProduct
//         })
//     } catch (error) {
//         res.status(403).json({ error });
//     }
// };
// const productEdit = async( req = request, res = response ) => {
//     const {id} = req.params;
//     const { name, price } = req.body;
//     try {
//         const editingProduct = await Product.update({
//             name,
//             price
//         },{
//             where:{
//                 id
//             }
//         }
//         );
//         res.status(201).json({
//             msg: 'Product updated successfully',
//             editingProduct
//         })
//     } catch (error) {
//         res.status(403).json({ error });
//     }
// };
// const productDelete = async( req = request, res = response ) => {
//     const { id } = req.params;
//     try {
//         const productDeleted = await Product.update({
//             state: false
//         },{
//             where:{
//                 id
//             }
//         });
//         res.status(200).json({
//             msg:'Product deleted successfully',
//             productDeleted
//         });
//     } catch (error) {
//         res.status(401).json({ error: error });
//     }
// };
module.exports = {
    productsGet,
    // productCreate,
    // productEdit,
    // productDelete
}