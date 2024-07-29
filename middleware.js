import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n.config";

export async function middleware(req) {
  const path = req.nextUrl.pathname;
  const { locales, defaultLocale } = i18n;

  // Check if the path is missing a locale
  const pathnameIsMissingLocale =
    path === "/" ||
    locales.every(
      (locale) => !path.startsWith(`/${locale}/`) && path !== `/${locale}`
    );

  // If missing locale, redirect to the path with default locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${path === "/" ? "" : path}`, req.url)
    );
  }

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



