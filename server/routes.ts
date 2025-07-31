import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { verifyStudentSchema, insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Student verification endpoint
  app.post("/api/verify-student", async (req, res) => {
    try {
      const { certificateNumber } = verifyStudentSchema.parse(req.body);
      
      const verification = await storage.getStudentVerification(certificateNumber);
      
      if (!verification) {
        return res.status(404).json({ 
          message: "Certificate not found. Please check your certificate number and try again." 
        });
      }

      res.json(verification);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid input", 
          errors: error.errors 
        });
      }
      
      console.error("Error verifying student:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSubmissionSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission(contactData);
      
      res.status(201).json({ 
        message: "Thank you for your message! We will get back to you soon.",
        submissionId: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Please fill in all required fields correctly", 
          errors: error.errors 
        });
      }
      
      console.error("Error saving contact submission:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
