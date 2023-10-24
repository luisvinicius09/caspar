import { NextResponse, type NextRequest } from 'next/server';
import { authStore } from './app/authStore';

const protectedRoutes = ['/charges', '/clients', '/dashboard', '/settings'];

export function middleware(request: NextRequest) {
	const store = authStore.getState();

	if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
		if (!store.isAuthorized) {
			return NextResponse.redirect(new URL('/login', request.url));
		}
	}

	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}

	// if (request.nextUrl.pathname.startsWith('/login')) {
	// 	if (store.isAuthorized) {
	// 		return NextResponse.redirect(new URL('/dashboard', request.url));
	// 	}
	// }
}
