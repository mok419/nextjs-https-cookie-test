import { type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    cookies().set('theme', 'dark', {httpOnly: true, secure: true, sameSite: "none"})
    return new Response('<h1>Samesite none cookies set here</h1>', {
        headers: {
            "Content-Type": 'text/html',
            "Set-Cookie": 'test=next-default'
        }
    })
}