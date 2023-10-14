import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
    
    const token =  request.cookies.get('access_token')?.value

    const signinURL = new URL('/', request.url)
    const dashboardURL = new URL('/dashboard', request.url)
    // if(!token) {
    //     if(request.nextUrl.pathname === '/'){
    //         return NextResponse.next()
    //     }
    //     return NextResponse.redirect(signinURL)
    // }

    // if(request.nextUrl.pathname === "/" ) {
    //     return NextResponse.redirect(dashboardURL)
    // }
}

export const config = {
    matcher: ['/', '/dashboard/:path*']
}