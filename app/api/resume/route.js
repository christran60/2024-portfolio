// app/api/resume/route.js
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const date = new Date();
  // const currentMonth = date.toLocaleString("default", { month: "short" });
  // const currentYear = date.getFullYear();

  // const fileName = `Christopher_Tran_Resume_${currentMonth}${currentYear}.pdf`;
  const fileName = `Christopher_Tran_Resume.pdf`;
  const filePath = path.join(process.cwd(), "resume", fileName);

  try {
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("Error downloading the file:", error);
    return new NextResponse("File not found", { status: 404 });
  }
}
