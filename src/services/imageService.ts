import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateHeroImage() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A high-resolution, cinematic cyberpunk style London night view. Futuristic neon lights in cyan, magenta, and electric violet reflecting off wet streets. Iconic London landmarks like Big Ben or The Shard with futuristic architectural additions. Rainy, atmospheric, moody, and premium aesthetic. No text.',
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
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
