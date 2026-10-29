import { buildLlmsFull, textHeaders } from "@/lib/llms";

export const revalidate = 3600;

export function GET() {
  return new Response(buildLlmsFull(), { headers: textHeaders });
}
