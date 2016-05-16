var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/hecka/fresh', function(req, res) {
	res.send('Path: /hecka/fresh');
};

router.get('/hecka/bay', function(req, res) {
	res.send('Path: /hecka/bay');
};

module.exports = router;
