import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const projectId = process.env.VERCEL_PROJECT_ID;
  const token = process.env.VERCEL_TOKEN;

  if (!projectId || !token) {
    return NextResponse.json(
      { error: "VERCEL_PROJECT_ID와 VERCEL_TOKEN을 설정해주세요." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.vercel.com/v6/deployments?projectId=${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "배포 정보를 가져오지 못했습니다." },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
