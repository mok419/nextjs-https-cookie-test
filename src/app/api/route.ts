import { type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    cookies().set('theme', 'dark')
    return new Response('<h1>Hi there</h1>', {
        headers: {
            "Content-Type": 'text/html',
            "Set-Cookie": 'test=next-default'
        }
    })
}