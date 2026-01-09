import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import FormSubmission from "@/models/Form"; // make sure your model file is Form.ts

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email fields are required" },
        { status: 400 }
      );
    }

    const submission = await FormSubmission.create({ name, email, message });

    return NextResponse.json(
      { message: "Form data saved", data: submission },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    return NextResponse.json(
      { message: "Error saving form data" },
      { status: 500 }
    );
  }
}
