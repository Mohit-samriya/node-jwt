const express = require("express");
const postController = require("../controllers/post");
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/create", postController.createUser);
router.post("/login", postController.loginUser);
router.get('/auth',authController.authenticate,authController.index);

module.exports = router;