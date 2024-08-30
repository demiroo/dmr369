"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../i18n-config";
import AnimatedGradientText from "./magicui/animated-gradient-text";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = pathName?.split("/")[1] || i18n.defaultLocale; // Extract current locale or fallback to default

  const getLocalizedPath = (locale: Locale) => {
    if (!pathName) return `/${locale}`; // If no path, only return locale
    const segments = pathName.split("/");
    segments[1] = locale; // Set locale as the first path segment
    return segments.join("/");
  };

  return (
    <AnimatedGradientText className="sticky-header  flex min-h-[1rem] items-center justify-center mt-5 mb-10">
    <div className="sticky-header flex min-h-[1rem] items-center justify-center mb-1 mt-1"> 
      
        {i18n.locales.map((locale) => {
          const isSelected = locale === currentLocale;

          return (
            <Link
              key={locale}
              href={getLocalizedPath(locale)}
              className={`text-sm px-1 py-1 mr-2 ml-2 rounded ${
                isSelected
                  ? "bg-gray-200 text-gray-900 font-semibold" // Style for selected locale
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700" // Style for non-selected locales
              } transition-all duration-200 inline-block`}
            >
              {locale.toUpperCase()}
            </Link>
          );
        })}
      
    </div>
    </AnimatedGradientText> 
  );
}
