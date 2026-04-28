// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
    
//     // Process lead submission here
//     console.log('Lead submitted:', body);
    
//     return NextResponse.json(
//       { message: 'Lead submitted successfully', data: body },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error processing lead:', error);
//     return NextResponse.json(
//       { error: 'Failed to submit lead' },
//       { status: 500 }
//     );
//   }
// }
// app/api/submit-lead/route.ts
import { NextResponse } from 'next/server';

// Note (Requirement): Bonus option stores data. This mock API can be extended to connect
// to a real DB. We are handling the request/response logic here to satisfy the requirement.
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Mandatory Data Validation (Essential for APIs)
    if (!body.name || !body.email || !body.email.includes('@')) {
      return NextResponse.json({ success: false, error: "Missing mandatory fields: Name and valid Email required." }, { status: 400 });
    }

    // 2. MOCK: Simulate connecting to a real database (e.g., store data in Mongo)
    console.log("Mock data saved for user:", body.email, "Details:", body);

    // 3. Return a successful, JSON response
    return NextResponse.json({ success: true, message: "Lead captured successfully!" }, { status: 200 });

  } catch (error) {
    // 4. Handle unexpected errors gracefully
    console.error("API Route Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}