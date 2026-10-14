"use client";

import { useState, type ReactNode, type SVGProps } from "react";
import NextLink from "next/link";
import { Button } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const createIcon = (content: ReactNode) =>
  function Icon({ size = 24, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {content}
      </svg>
    );
  };

const ArrowRight = createIcon(<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>);
const ChevronDown = createIcon(<path d="m6 9 6 6 6-6" />);
const LayoutDashboard = createIcon(<><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></>);
const LogIn = createIcon(<><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" /></>);
const LogOut = createIcon(<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></>);
const Menu = createIcon(<><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>);
const Sparkles = createIcon(<><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>);
const UserRound = createIcon(<><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></>);
const X = createIcon(<><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Pricing", href: "/#pricing" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { data: session, isPending } = useSession();
  const pathname = usePathname();

  const user = session?.user;

  const handleSignOut = async () => {
    setIsSigningOut(true);

    try {
      await signOut();
      setIsProfileOpen(false);
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/85 text-white shadow-lg shadow-black/5 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NextLink
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-900/30 transition group-hover:scale-105">
            <Sparkles size={21} className="text-white" />
          </div>

          <div>
            <p className="text-lg font-black tracking-[0.15em]">
              NA ZM <span className="text-violet-400">UL</span>
            </p>
            <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500">
              Your digital space
            </p>
          </div>
        </NextLink>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : !item.href.includes("#") &&
                  (pathname === item.href ||
                    pathname.startsWith(`${item.href}/`));

            return (
              <li key={item.name}>
                <NextLink
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-violet-500/10 text-violet-300"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-violet-400" />
                  )}
                </NextLink>
              </li>
            );
          })}
        </ul>

        {/* Desktop auth section */}
        <div className="hidden items-center gap-3 md:flex">
          {isPending ? (
            <div className="h-9 w-24 animate-pulse rounded-xl bg-white/5" />
          ) : user ? (
            <div className="relative flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-expanded={isProfileOpen}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-3 py-2 transition hover:border-violet-400/40 hover:bg-white/5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-indigo-600">
                  <UserRound size={17} />
                </div>

                <div className="max-w-32 text-left">
                  <p className="truncate text-sm font-semibold">
                    {user.name || "User"}
                  </p>
                  <p className="text-[10px] text-gray-500">Signed in</p>
                </div>

                <ChevronDown
                  size={15}
                  className={`text-gray-400 transition ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-[#151519] p-2 shadow-2xl">
                  <div className="border-b border-white/10 px-3 py-3">
                    <p className="truncate text-sm font-semibold">
                      {user.name}
                    </p>
                    <p className="truncate text-xs text-gray-500">
                      {user.email}
                    </p>
                  </div>

                  <Button
                    onPress={handleSignOut}
                    isDisabled={isSigningOut}
                    className="mt-2 flex w-full justify-start gap-2 rounded-xl bg-transparent px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                  >
                    <LogOut size={16} />
                    {isSigningOut ? "Signing out..." : "Sign out"}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NextLink
                href="/sign-in"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 transition hover:text-white"
              >
                <LogIn size={17} />
                Sign in
              </NextLink>

              <NextLink
                href="/sign-up"
                className="flex h-10 items-center gap-2 rounded-xl bg-violet-600 px-5 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500"
              >
                Get Started
                <ArrowRight size={16} />
              </NextLink>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0d0d10] px-4 pb-5 pt-3 md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : !item.href.includes("#") &&
                    (pathname === item.href ||
                      pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.name}>
                  <NextLink
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-violet-500/10 text-violet-300"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name === "Dashboard" && (
                      <LayoutDashboard size={17} />
                    )}
                    {item.name}
                  </NextLink>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-4">
            {isPending ? (
              <div className="h-10 animate-pulse rounded-xl bg-white/5" />
            ) : user ? (
              <>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-600">
                    <UserRound size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      Welcome, {user.name || "User"}
                    </p>
                    <p className="truncate text-xs text-gray-500">
                      {user.email}
                    </p>
                  </div>
                </div>

                <Button
                  onPress={handleSignOut}
                  isDisabled={isSigningOut}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 text-sm font-semibold text-red-400 hover:bg-red-500/10"
                >
                  <LogOut size={17} />
                  {isSigningOut ? "Signing out..." : "Sign out"}
                </Button>
              </>
            ) : (
              <>
                <NextLink
                  href="/login"
                  onClick={closeMenu}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <LogIn size={17} />
                  Sign in
                </NextLink>

                <NextLink
                  href="/signup"
                  onClick={closeMenu}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500"
                >
                  Get Started
                  <ArrowRight size={16} />
                </NextLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}