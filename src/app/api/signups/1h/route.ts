import { NextResponse } from "next/server";
import OneHour from '@/app/DummyData/Signups/1h/OneHour.json'


export async function GET(req: Request) {
  try {
    const Signups: SignupWithin1Hour[] = OneHour
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