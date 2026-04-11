import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const staffTable = pgTable("staff", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    role: text("role").notNull(),
    bio: text("bio").notNull(),
    yearsExperience: integer("years_experience").notNull(),
    education: text("education").notNull(),
    imageUrl: text("image_url"),
    certifications: json("certifications").$type().notNull().default([]),
});
export const insertStaffSchema = createInsertSchema(staffTable).omit({ id: true });
