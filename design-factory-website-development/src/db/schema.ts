import { boolean, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 80 }).notNull().unique(),
  nameAr: text("name_ar").notNull(),
  nameEn: text("name_en").notNull(),
  descAr: text("desc_ar").notNull(),
  descEn: text("desc_en").notNull(),
  category: varchar("category", { length: 40 }).notNull(),
  price: integer("price").notNull(),
  image: text("image").notNull(),
  badgeAr: text("badge_ar"),
  badgeEn: text("badge_en"),
  stock: integer("stock").notNull().default(10),
  active: boolean("active").notNull().default(true),
});

export const requests = pgTable("requests", {
  id: serial("id").primaryKey(),
  kind: varchar("kind", { length: 32 }).notNull(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  city: text("city"),
  topic: text("topic"),
  message: text("message"),
  details: text("details"),
  total: integer("total"),
  status: varchar("status", { length: 24 }).notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Product = typeof products.$inferSelect;
export type RequestRow = typeof requests.$inferSelect;
