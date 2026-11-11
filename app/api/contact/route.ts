import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  projectType: z.string().min(2, "Please select or enter a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = contactSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error.errors.map((e) => e.message).join(", "),
        },
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, message } = result.data;

    // Check if Resend API key is available
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "inioluwaosibajo@gmail.com";

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: recipientEmail,
          reply_to: email,
          subject: `[Portfolio Inquiry] ${projectType} from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget || "Not specified"}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Resend API error:", errorText);
        return NextResponse.json(
          { success: false, error: "Failed to dispatch email via provider." },
          { status: 502 }
        );
      }
    } else {
      // Development fallback logger
      console.log("=== [LOCAL DEV CONTACT DISPATCH] ===");
      console.log(`From: ${name} <${email}>`);
      console.log(`Project: ${projectType} | Budget: ${budget || "N/A"}`);
      console.log(`Message: ${message}`);
      console.log("=====================================");
    }

    return NextResponse.json({
      success: true,
      message: "Message received. Inioluwa will reply within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
