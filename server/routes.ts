import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      // Send email notification
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `Portfolio Contact <${process.env.GMAIL_USER}>`,
        to: "ajaywaghmare782@gmail.com", // send to new address
        subject: `New Contact Message from ${validatedData.name}`,
        text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage: ${validatedData.message}`,
        html: `<p><b>Name:</b> ${validatedData.name}</p><p><b>Email:</b> ${validatedData.email}</p><p><b>Message:</b><br/>${validatedData.message.replace(/\n/g, '<br/>')}</p>`
      });

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error: any) {
      console.error("Contact form error:", error);
      let errorMsg = "Unknown error";
      if (error.name === "ZodError") {
        errorMsg = "Invalid form data.";
      } else if (error.response && error.response.code) {
        errorMsg = `Email error: ${error.response.code}`;
      } else if (error.code) {
        errorMsg = `Email error: ${error.code}`;
      } else if (error.message) {
        errorMsg = error.message;
      }
      res.status(400).json({ success: false, message: errorMsg });
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
