const express = require("express");
const router = express.Router()

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users for post
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:id PUT, and DELETE 
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/userId/friends
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;