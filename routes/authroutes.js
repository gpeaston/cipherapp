const express = require('express');
const authRouter = express.Router();
const debug = require ('debug')('app:authroutes');

function router() {
    authRouter.route('/users.json')
    .post((req, res) => {
        debug(req.body);
        res.json(req.body);
    });
    return authRouter;
}

module.exports = router;