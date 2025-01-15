import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { latitude: string; longitude: string } }
) {
  const { latitude, longitude } = params;

  // Validate latitude and longitude
  if (!latitude) {
    return NextResponse.json({ error: "Missing Latitude." }, { status: 400 });
  }
  if (!longitude) {
    return NextResponse.json({ error: "Missing Longitude." }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    );
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch weather data." },
      { status: 500 }
    );
  }
}
