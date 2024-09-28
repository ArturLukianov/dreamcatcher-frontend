const router = require('express').Router();

module.exports = router;

router.get('/locations', (req, res) => {
    res.send([
        {
            name: 'Дом',
            icon: 'Home',
            position: {
                x: 10,
                y: 10,
            }
        }
    ])
})