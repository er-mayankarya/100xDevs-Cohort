import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export function GET() {
  return NextResponse.json({
    email: "mayank@gmail.com",
    name: "MayAnk",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    return NextResponse.json({
      body,
    });
  } catch (error) {
    console.log(error)
    return  NextResponse.json(
      {
        message: "error while signing up!!",
      },
      {
        status: 411,
      }
    );
  }
}
