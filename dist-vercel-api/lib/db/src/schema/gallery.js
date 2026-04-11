import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const galleryTable = pgTable("gallery", {
    id: serial("id").primaryKey(),
    url: text("url").notNull(),
    caption: text("caption").notNull(),
    category: text("category").notNull(),
});
export const insertGallerySchema = createInsertSchema(galleryTable).omit({ id: true });
