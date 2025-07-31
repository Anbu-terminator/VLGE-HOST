import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const studentVerifications = pgTable("student_verifications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  certificateNumber: text("certificate_number").notNull().unique(),
  studentName: text("student_name").notNull(),
  registrationNumber: text("registration_number").notNull(),
  college: text("college").notNull(),
  dateOfJoining: text("date_of_joining").notNull(),
  dateOfIssue: text("date_of_issue").notNull(),
  domain: text("domain").notNull(),
  status: text("status").notNull(),
  grade: text("grade").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertStudentVerificationSchema = createInsertSchema(studentVerifications).omit({
  id: true,
  createdAt: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const verifyStudentSchema = z.object({
  certificateNumber: z.string().min(1, "Certificate number is required"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type StudentVerification = typeof studentVerifications.$inferSelect;
export type InsertStudentVerification = z.infer<typeof insertStudentVerificationSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type VerifyStudentRequest = z.infer<typeof verifyStudentSchema>;
