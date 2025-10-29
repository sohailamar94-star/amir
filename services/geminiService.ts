
import { GoogleGenAI, Type } from "@google/genai";

interface DescriptionResponse {
  descriptions: {
    productName: string;
    description: string;
  }[];
}

export const generateProductDescriptions = async (productNames: string[]): Promise<Record<string, string>> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  const prompt = `You are a brilliant marketing copywriter for a high-end tech beauty brand called 'TechBeauty'. 
  Generate a short, enticing, one-sentence marketing description for each of the following products.
  The descriptions should sound futuristic, luxurious, and effective.
  The product names are: ${productNames.join(', ')}.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            descriptions: {
              type: Type.ARRAY,
              description: "A list of products with their generated descriptions.",
              items: {
                type: Type.OBJECT,
                properties: {
                  productName: {
                    type: Type.STRING,
                    description: "The name of the product.",
                  },
                  description: {
                    type: Type.STRING,
                    description: "The generated marketing description.",
                  },
                },
                 required: ["productName", "description"],
              },
            },
          },
          required: ["descriptions"],
        },
      },
    });

    const parsedResponse: DescriptionResponse = JSON.parse(response.text);
    const descriptionMap: Record<string, string> = {};
    
    if (parsedResponse.descriptions) {
      parsedResponse.descriptions.forEach(item => {
        descriptionMap[item.productName] = item.description;
      });
    }

    return descriptionMap;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    // In case of an error, return a generic description for all products
    const fallbackMap: Record<string, string> = {};
    productNames.forEach(name => {
      fallbackMap[name] = "Unlock the future of personal care with this innovative device.";
    });
    return fallbackMap;
  }
};
