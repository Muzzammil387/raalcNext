import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n.config";

export async function middleware(req) {
  const path = req.nextUrl.pathname;
  const { locales, defaultLocale } = i18n;

  // Check if the path is missing a locale
  // const pathnameIsMissingLocale =
  //   path === "/" ||
  //   locales.every(
  //     (locale) => !path.startsWith(`/${locale}/`) && path !== `/${locale}`
  //   );

  // // If missing locale, redirect to the path with default locale
  // if (pathnameIsMissingLocale) {
  //   return NextResponse.redirect(
  //     new URL(`/${defaultLocale}${path === "/" ? "" : path}`, req.url)
  //   );
  // }

  // Extract the current locale from the path
  const currentLocale =
    locales.find(
      (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`
    ) || defaultLocale;

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};





// middleware.js

// import { NextRequest, NextResponse } from 'next/server';
// import { i18n } from './i18n.config';

// export async function middleware(req) {
//   const { pathname } = req.nextUrl;
//   const { locales, defaultLocale } = i18n;

//   // Remove '/en' from paths where it is not needed
//   if (pathname.startsWith(`/${defaultLocale}/`) && pathname !== `/${defaultLocale}/`) {
//     const newPathname = pathname.replace(`/${defaultLocale}`, '') || '/';
//     const url = new URL(newPathname, req.url);
//     return NextResponse.redirect(url);
//   }

//   // Check if the path is missing a locale
//   const pathnameIsMissingLocale =
//     pathname === "/" ||
//     locales.every(
//       (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//     );

//   if (pathnameIsMissingLocale) {
//     const url = new URL(`/${defaultLocale}${pathname === "/" ? "" : pathname}`, req.url);
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

