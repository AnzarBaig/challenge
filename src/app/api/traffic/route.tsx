import { NextResponse } from "next/server";
import Traffic from "@/app/DummyData/Traffic/traffic.json"


export async function GET(req: Request) {
  try {
    const TrafficData: TrafficData[] = Traffic
    return NextResponse.json(TrafficData, {
      status: 200
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500
    });
  }
}