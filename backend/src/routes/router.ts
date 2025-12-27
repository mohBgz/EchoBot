// routes/index.js
import express from "express";
import multer from "multer";
import rateLimit from "express-rate-limit";
import { handleChat } from "../controllers/handleChat.js";
import { handleCMS } from "../controllers/handleCMS.js";
import { handleUpload } from "../controllers/handleUpload.js";
import { getSessionFiles } from "../controllers/getSessionFiles.js";
import { handleDelete } from "../controllers/handleDelete.js";

const router = express.Router();

// Configure multer for upload routes
const upload = multer({ storage: multer.memoryStorage() });

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	max: 10, // max 10 requests per IP per minute
	standardHeaders: true,
	legacyHeaders: false,
	handler: (req, res) => {
		res.status(429).json({
			error: "Too many requests, please wait a moment before trying again.",
		});
	},
});

// Chat routes
router.post("/chat", limiter, handleChat);

// CMS routes
router.post("/cms/upload", limiter, upload.array("files", 3), handleCMS);
router.get("/cms", getSessionFiles("cms_files"));
router.delete("/cms/:fileHash", handleDelete("cms_files"));

router.post("/docs/upload", limiter, upload.array("files", 3), handleUpload);
router.get("/docs", getSessionFiles("documents"));
router.delete("/docs/:fileHash", handleDelete("documents"));

export default router;
