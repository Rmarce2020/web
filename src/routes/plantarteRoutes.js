const express = require( 'express' );
const router = express.Router();

const plantarteController = require("../controllers/plantarteController");

router.get('/plantas', plantarteController.list);
/*router.get('/plantas/detail/:id', plantarteController.detail);*/
/*router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put("/movies/update/:id", moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.put('/movies/delete/:id', moviesController.destroy);*/

module.exports = router;