import { NextResponse } from "next/server";
import Month from '@/app/DummyData/Signups/30d/Month.json'


export async function GET(req: Request) {
  try {
    const Signups: SignupWithin1Hour[] = Month
    return NextResponse.json(Signups, {
      status: 200
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500
    });
  }
}