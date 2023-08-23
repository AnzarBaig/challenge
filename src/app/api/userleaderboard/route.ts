import { NextResponse } from "next/server";
import UserData from '@/app/DummyData/UserLeaderboard/userleaderboard.json'


export async function GET(req: Request) {
  try {
    const Signups: UserData[] = UserData
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