import express from "express";
import cors from "cors";
import path from "path";
import { pinoHttp } from "pino-http";
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";
const app = express();
app.use(pinoHttp({
    logger,
    serializers: {
        req(req) {
            return {
                id: req.id,
                method: req.method,
                url: req.url?.split("?")[0],
            };
        },
        res(res) {
            return {
                statusCode: res.statusCode,
            };
        },
    },
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api", router);
app.use(express.static(path.join(process.cwd(), "public")));
// Catch-all fallback for React Single Page Application
app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
        res.sendFile(path.join(process.cwd(), "public", "index.html"));
    }
    else {
        next();
    }
});
// Global API Error Handler
app.use((err, req, res, next) => {
    console.error("API Error encountered:", err);
    if (req.path.startsWith('/api')) {
        res.status(500).json({ error: err.message || "Internal Server Error", stack: err.stack });
    }
    else {
        next(err);
    }
});
export default app;
