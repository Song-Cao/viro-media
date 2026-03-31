import { GoogleGenAI } from "@google/genai";

async function generateKOLMap() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A world map made entirely of a collage of diverse influencer and KOL face avatars from all over the world. The faces are arranged to form the continents of the earth on a dark, tech-luxury background. High quality, professional photography style, vibrant colors for the faces, glowing accents.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      console.log(`data:image/png;base64,${part.inlineData.data}`);
    }
  }
}

generateKOLMap();
