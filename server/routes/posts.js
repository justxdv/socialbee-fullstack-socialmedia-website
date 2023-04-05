import express from "express";
import { getFeedPosts, getUserPosts, likePost, createComment, deleteComment } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

// CREATE
router.post("/:id/comments", verifyToken, createComment);

// DELETE COMMENT
router.delete("/:id/comments/:commentId", verifyToken, deleteComment);

export default router;