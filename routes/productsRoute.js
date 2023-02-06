const { Router } = require("express");
const { productsGet, productCreate, productEdit, productDelete } = require("../controllers/productsController");

const router = Router();
router.get( '/', productsGet );
// router.post('/', productCreate);
// router.put('/:id', productEdit);
// router.delete('/:id', productDelete);
module.exports = router;