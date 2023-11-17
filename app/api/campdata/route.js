import { camps } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
   const data = camps;
   return NextResponse.json(data, {status:200})
}