import Ajv from "ajv";
import { foo } from "@/lib/foo";

export function GET() {
  foo();
  new Ajv().compile({ type: "string" });
  return Response.json({ message: "Hello, World!" });
}

export const runtime = "edge";
