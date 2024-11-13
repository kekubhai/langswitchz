import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';


interface ConversionRequest {
  sourceCode: string;
  sourceLanguage: string;
  targetLanguage: string;
}


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(req: Request) {
  try {
   
    const { sourceCode, sourceLanguage, targetLanguage }: ConversionRequest = await req.json();

   
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  
    const prompt = `Convert the following ${sourceLanguage} code to ${targetLanguage}:

${sourceCode}

Please provide only the converted code without any explanations.`;

    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text(); 

   
    return NextResponse.json({ convertedCode: text });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred during conversion' }, { status: 500 });
  }
}
