import { NextRequest, NextResponse } from "next/server";

export function GET(){
  return NextResponse.json({
    email : "mayank@gmail.com" ,
    name : "MayAnk"
  })
}

export async function POST( req : NextRequest){

  //body
  const body = await req.json();

  /*
  //header
  console.log(req.headers.get("authorization"));

  //query parameter
  console.log(req.nextUrl.searchParams.get("name"));
  */

  return NextResponse.json({
    body
  })
}