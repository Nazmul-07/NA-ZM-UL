"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

type IconProps = React.ComponentProps<"svg"> & { size?: number };

const ArrowRight = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Eye = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOff = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
    <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.1 3.9M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7a10 10 0 0 0 3.2-.5" />
  </svg>
);

const LockKeyhole = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4m-5 4v3" />
    <circle cx="12" cy="15" r=".5" />
  </svg>
);

const Mail = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const ShieldCheck = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Sparkles = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
    <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14ZM5 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
  </svg>
);

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    try {
      const { error } = await signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(error.message || "Invalid email or password.");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-4 py-12 text-white sm:px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-violet-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111114] shadow-2xl shadow-black/40 lg:grid-cols-2">
        {/* Left section */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-linear-to-br from-violet-600 via-indigo-700 to-blue-800 p-10 lg:flex xl:p-12">
          <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 top-32 h-48 w-48 rounded-full border border-white/10" />

          <Link href="/" className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Sparkles size={23} />
            </div>
            <span className="text-xl font-bold tracking-tight">NA{' '}ZM{' '}UL</span>
          </Link>

          <div className="relative my-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
              <ShieldCheck size={16} />
              Secure sign in
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
              Welcome
              <br />
              <span className="text-blue-200">back.</span>
            </h1>

            <p className="mt-5 max-w-sm text-base leading-7 text-white/75">
              Sign in to continue where you left off and get back to your
              personalized experience.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-9 w-9 rounded-full border-2 border-indigo-600 bg-violet-300" />
                <div className="h-9 w-9 rounded-full border-2 border-indigo-600 bg-blue-300" />
                <div className="h-9 w-9 rounded-full border-2 border-indigo-600 bg-pink-300" />
              </div>
              <p className="text-sm text-white/80">
                Your journey continues here.
              </p>
            </div>
          </div>

          <p className="relative text-xs text-white/50">
            Secure access. Seamless experience.
          </p>
        </section>

        {/* Right section */}
        <section className="px-6 py-10 sm:px-10 sm:py-12 lg:px-10 xl:px-14">
          <div className="mx-auto w-full max-w-md">
            <Link
              href="/"
              className="mb-9 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white lg:hidden"
            >
              <Sparkles size={18} className="text-violet-400" />
              <span className="font-semibold text-white">YourBrand</span>
            </Link>

            <div className="mb-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <LockKeyhole size={24} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Sign in
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Enter your account details to continue.
              </p>
            </div>

            <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ) {
                    return "Please enter a valid email address.";
                  }
                  return null;
                }}
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium text-gray-200">
                  Email address
                </Label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#19191e] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus-within:border-violet-400"
                  />
                </div>

                <FieldError className="text-xs text-red-400" />
              </TextField>

              <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters.";
                  }
                  return null;
                }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <Label className="text-sm font-medium text-gray-200">
                    Password
                  </Label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-violet-300 transition hover:text-violet-200"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#19191e] pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-gray-600 focus-within:border-violet-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-500 transition hover:text-white"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <Description className="text-xs text-gray-500">
                  Enter the password associated with your account.
                </Description>

                <FieldError className="text-xs text-red-400" />
              </TextField>

              {errorMessage && (
                <p
                  role="alert"
                  className="w-full rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                isDisabled={isLoading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Signing in..." : "Sign in"}
                {!isLoading && <ArrowRight size={18} />}
              </Button>
            </Form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-gray-500">NEW HERE?</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-center text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-violet-300 transition hover:text-violet-200"
              >
                Create account
              </Link>
            </p>

            <p className="mt-8 text-center text-xs leading-5 text-gray-600">
              By signing in, you agree to your application&apos;s terms and
              privacy policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignInPage;