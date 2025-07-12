import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid form data" });
    }
  });

  // Resume download
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(__dirname, "..", "attached_assets", "myresume_1752295820214.pdf");
    res.download(resumePath, "Ajay_Waghmare_Resume.pdf", (err) => {
      if (err) {
        res.status(404).json({ error: "Resume not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
