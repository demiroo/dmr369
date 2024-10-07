"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../components/mode-toggle";
import { buttonVariants } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { DATA } from "../data/resume";
import { cn } from "../lib/utils";
import { i18n, type Locale } from "../i18n-config";
import { useTheme } from "next-themes";

export default function BottomNavbar() {
  const pathName = usePathname();
  const currentLocale = pathName?.split("/")[1] || i18n.defaultLocale;

  const getLocalizedPath = (locale: Locale) => {
    if (!pathName) return `/${locale}`;
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const { theme } = useTheme(); // Detect theme

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t-2 border-border shadow-md backdrop-blur-lg", // Added blur effect
        theme === "dark"
          ? "bg-black bg-opacity-80" // Black background with opacity for dark mode (adjust opacity as needed)
          : "bg-white bg-opacity-80" // Light background with opacity for light mode
      )}
    >
      <div className="flex items-center justify-between px-4 py-1.5 max-w-screen-lg mx-auto">
        {/* Reduced padding horizontally and vertically */}
        <div className="flex items-center space-x-1.5">
          {DATA.navbar.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-9" // Reduced size of buttons
                  )}
                >
                  <item.icon className="size-4" /> {/* Smaller icon */}
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">{item.label}</p>{" "}
                {/* Smaller tooltip text */}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center space-x-1.5">
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={getLocalizedPath(locale)}
              className={cn(
                "px-2 py-1 text-xs font-medium rounded-md transition-colors duration-200",
                locale === currentLocale
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              {locale.toUpperCase()}
            </Link>
          ))}
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* Hide social icons on small screens */}
        <div className="hidden md:flex items-center space-x-1.5">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-9"
                  )}
                >
                  <social.icon className="size-4" />
                  <span className="sr-only">{name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">{name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <Separator orientation="vertical" className="h-6" />

        <Tooltip>
          <TooltipTrigger asChild>
            <ModeToggle />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Theme</p> {/* Smaller tooltip text */}
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
}
