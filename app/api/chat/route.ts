import { mistral } from '@ai-sdk/mistral';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: mistral('mistral-small-latest'),
    messages,
  });

  return result.toDataStreamResponse();
}
