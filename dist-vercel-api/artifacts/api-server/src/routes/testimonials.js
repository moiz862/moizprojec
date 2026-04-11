import { Router } from "express";
import { db, testimonialsTable } from "@workspace/db";
import { ListTestimonialsResponse } from "@workspace/api-zod";
const router = Router();
router.get("/testimonials", async (_req, res) => {
    const testimonials = await db.select().from(testimonialsTable).orderBy(testimonialsTable.createdAt);
    res.json(ListTestimonialsResponse.parse(testimonials));
});
export default router;
