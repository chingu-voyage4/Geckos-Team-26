const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ testdata: 'This is test data sent from the backend' });
});

module.exports = router;