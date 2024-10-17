// export async function GET(response) {
//   return new Response("Hello")
// }

import { NextResponse } from "next/server"

export const GET = (request) => {
    return NextResponse.json({name:"Farzeen", age:23, department:"CS"})
}