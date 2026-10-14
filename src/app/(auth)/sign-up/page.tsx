"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { signUp } from "@/lib/auth-client";

type IconProps = {
  size?: number;
  className?: string;
};

const ArrowRight = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

const CheckCircle2 = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
    <path d="M20 6v6" />
    <path d="M20 6h-6" />
  </svg>
);

const Eye = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOff = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 3l18 18" />
    <path d="M10.6 10.6A2 2 0 0 0 13.4 13.4" />
    <path d="M9.9 5.3A10.7 10.7 0 0 1 12 5c6.5 0 10 7 10 7a17.4 17.4 0 0 1-4.3 5.7" />
    <path d="M6.5 6.5A17.6 17.6 0 0 0 2 12s3.5 7 10 7a10.8 10.8 0 0 0 5.4-1.5" />
  </svg>
);

const LockKeyhole = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="16" r="1" />
    <path d="M7 10V8a5 5 0 0 1 10 0v2" />
    <rect x="5" y="10" width="14" height="10" rx="2" />
  </svg>
);

const Mail = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const ShieldCheck = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Sparkles = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
    <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
    <path d="M5 15l.7 2.3L8 18l-2.3.7L5 21l-.7-2.3L2 18l2.3-.7L5 15Z" />
  </svg>
);

const UserRound = ({ size = 18, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c1.5-3.5 5-5 8-5s6.5 1.5 8 5" />
  </svg>
);

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    try {
      const { error } = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (error) {
        setErrorMessage(error.message || "Unable to create your account.");
        return;
      }

      setSuccessMessage(
        "Your account was created successfully! Follow any verification steps if required.",
      );
      e.currentTarget.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-4 py-12 text-white sm:px-6">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-violet-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111114] shadow-2xl shadow-black/40 lg:grid-cols-2">
        {/* Left side: Brand */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-linear-to-br from-violet-600 via-indigo-700 to-blue-800 p-10 lg:flex xl:p-12">
          <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 top-32 h-48 w-48 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

          <Link href="/" className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
              <Sparkles size={23} />
            </div>
            <span className="text-xl font-bold tracking-tight">NA{' '}ZM{' '}UL</span>
          </Link>

          <div className="relative my-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
              <ShieldCheck size={16} />
              Secure account creation
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
              Your next chapter
              <br />
              starts <span className="text-blue-200">here.</span>
            </h1>

            <p className="mt-5 max-w-sm text-base leading-7 text-white/75">
              Create your account and get started with a simple, secure, and
              personalized experience.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Quick and easy registration",
                "A personalized experience",
                "Your account, your space",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="shrink-0 text-blue-200" />
                  <span className="text-sm text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="relative text-xs text-white/50">
            Create something great. Start today.
          </p>
        </section>

        {/* Right side: Signup form */}
        <section className="px-6 py-9 sm:px-10 sm:py-12 lg:px-10 xl:px-14">
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
                <UserRound size={24} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Create account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Enter your details below to create your new account.
              </p>
            </div>

            <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.trim().length < 3) {
                    return "Name must be at least 3 characters.";
                  }
                  return null;
                }}
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium text-gray-200">
                  Full name
                </Label>
                <Input
                  name="name"
                  placeholder="John Doe"
                  autoComplete="name"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#19191e] px-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus-within:border-violet-400"
                />
                <FieldError className="text-xs text-red-400" />
              </TextField>

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
                minLength={8}
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters.";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Include at least one uppercase letter.";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Include at least one number.";
                  }
                  return null;
                }}
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium text-gray-200">
                  Password
                </Label>
                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
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
                <Description className="text-xs leading-5 text-gray-500">
                  Use at least 8 characters, one uppercase letter, and one
                  number.
                </Description>
                <FieldError className="text-xs text-red-400" />
              </TextField>

              <label className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-gray-400">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-violet-500"
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-violet-300 underline-offset-4 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-violet-300 underline-offset-4 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {errorMessage && (
                <p
                  role="alert"
                  className="w-full rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {errorMessage}
                </p>
              )}

              {successMessage && (
                <p
                  role="status"
                  className="w-full rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
                >
                  {successMessage}
                </p>
              )}

              <Button
                type="submit"
                isDisabled={isLoading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Creating account..." : "Create account"}
                {!isLoading && <ArrowRight size={18} />}
              </Button>
            </Form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-gray-500">ALREADY A MEMBER?</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-semibold text-violet-300 transition hover:text-violet-200"
              >
                Sign in
              </Link>
            </p>

            <p className="mt-8 text-center text-xs leading-5 text-gray-600">
              Your information is handled according to your application&apos;s
              authentication and privacy settings.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUpPage;