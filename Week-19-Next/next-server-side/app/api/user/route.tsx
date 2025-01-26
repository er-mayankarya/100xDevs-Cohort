import { NextResponse } from "next/server";

export function GET() {
    
  return NextResponse.json({
    email: "mayankarya@gmail.com",
    name: "Mayank Arya",
  });
}
