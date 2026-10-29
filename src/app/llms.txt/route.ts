import { buildLlms, textHeaders } from "@/lib/llms";

export const revalidate = 3600;

export function GET() {
  return new Response(buildLlms(), { headers: textHeaders });
}
