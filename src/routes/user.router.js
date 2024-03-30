const { getAll, create, getUser, destroy, update } = require('../controllers/user.controler');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
        .post(create)

userRouter.route("/:id")
        .get(getUser)
        .delete(destroy)
        .put(update)

module.exports = userRouter;