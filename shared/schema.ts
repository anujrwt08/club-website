import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const members = pgTable("members", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  role: text("role").notNull(),
  major: text("major"),
  year: text("year"),
  specialty: text("specialty"),
  email: text("email"),
  github: text("github"),
  linkedin: text("linkedin"),
  imageUrl: text("image_url"),
  type: text("type").notNull(), // 'leadership', 'member', 'faculty', 'alumni'
  position: text("position"), // For leadership: 'President', 'Vice President', etc.
  credentials: text("credentials"), // For faculty
  officeHours: text("office_hours"), // For faculty
  currentRole: text("current_role"), // For alumni: where they are now
});

export const insertMemberSchema = createInsertSchema(members).omit({
  id: true,
});

export type InsertMember = z.infer<typeof insertMemberSchema>;
export type Member = typeof members.$inferSelect;

export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // 'workshop', 'ctf', 'networking', 'meeting'
  date: timestamp("date").notNull(),
  location: text("location"),
  imageUrl: text("image_url"),
  status: text("status").notNull(), // 'upcoming', 'past'
  attendees: text("attendees"), // For past events
  winners: text("winners"), // For CTF events
  highlights: text("highlights"), // For past events
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
