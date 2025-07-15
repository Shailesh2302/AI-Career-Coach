"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Helper function to map AI response to Prisma enum values
function mapInsightsToEnums(insights) {
  // Map demand level strings to enum values
  const demandLevelMap = {
    High: "HIGH",
    Medium: "MEDIUM",
    Low: "LOW",
    high: "HIGH",
    medium: "MEDIUM",
    low: "LOW",
  };

  // Map market outlook strings to enum values
  const marketOutlookMap = {
    Positive: "POSITIVE",
    Neutral: "NEUTRAL",
    Negative: "NEGATIVE",
    positive: "POSITIVE",
    neutral: "NEUTRAL",
    negative: "NEGATIVE",
  };

  return {
    ...insights,
    demandLevel: demandLevelMap[insights.demandLevel] || "MEDIUM",
    marketOutlook: marketOutlookMap[insights.marketOutlook] || "NEUTRAL",
  };
}

export const generateAIInsights = async (industry) => {
  try {
    const prompt = `
            Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
            {
              "salaryRanges": [
                { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
              ],
              "growthRate": number,
              "demandLevel": "High" | "Medium" | "Low",
              "topSkills": ["skill1", "skill2"],
              "marketOutlook": "Positive" | "Neutral" | "Negative",
              "keyTrends": ["trend1", "trend2"],
              "recommendedSkills": ["skill1", "skill2"]
            }
            
            IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
            Include at least 5 common roles for salary ranges.
            Growth rate should be a percentage.
            Include at least 5 skills and trends.
          `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    const rawInsights = JSON.parse(cleanedText);

    // Convert string enum values to Prisma enum values
    return mapInsightsToEnums(rawInsights);
  } catch (error) {
    console.error("Error generating AI insights:", error);

    // Fallback default values in case AI fails
    return {
      salaryRanges: [
        {
          role: "Entry Level",
          min: 40000,
          max: 60000,
          median: 50000,
          location: "USA",
        },
        {
          role: "Mid Level",
          min: 60000,
          max: 90000,
          median: 75000,
          location: "USA",
        },
        {
          role: "Senior Level",
          min: 90000,
          max: 130000,
          median: 110000,
          location: "USA",
        },
      ],
      growthRate: 5.0,
      demandLevel: "MEDIUM",
      topSkills: [
        "Communication",
        "Problem Solving",
        "Teamwork",
        "Technical Skills",
        "Leadership",
      ],
      marketOutlook: "NEUTRAL",
      keyTrends: [
        "Digital Transformation",
        "Remote Work",
        "Automation",
        "Sustainability",
        "Data Analytics",
      ],
      recommendedSkills: [
        "Digital Literacy",
        "Adaptability",
        "Critical Thinking",
        "Project Management",
        "Customer Focus",
      ],
    };
  }
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      include: {
        industryInsight: true,
      },
    });

    if (!user) throw new Error("User not found");

    // If user doesn't have an industry set, return null
    if (!user.industry) {
      return null;
    }

    // If no insights exist, generate them
    if (!user.industryInsight) {
      const insights = await generateAIInsights(user.industry);

      const industryInsight = await db.industryInsight.create({
        data: {
          industry: user.industry,
          ...insights,
          nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });

      return industryInsight;
    }

    // Check if insights need updating (optional)
    const now = new Date();
    if (
      user.industryInsight.nextUpdate &&
      now > user.industryInsight.nextUpdate
    ) {
      try {
        const updatedInsights = await generateAIInsights(user.industry);

        const industryInsight = await db.industryInsight.update({
          where: { industry: user.industry },
          data: {
            ...updatedInsights,
            lastUpdated: now,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });

        return industryInsight;
      } catch (error) {
        console.error("Error updating industry insights:", error);
        // Return existing insights if update fails
        return user.industryInsight;
      }
    }

    return user.industryInsight;
  } catch (error) {
    console.error("Error fetching industry insights:", error);
    throw new Error("Failed to fetch industry insights");
  }
}
