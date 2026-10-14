import Link from "next/link";
type IconProps = { size?: number; className?: string };
type IconName =
  | "arrow-right"
  | "zap"
  | "shield-check"
  | "monitor"
  | "users"
  | "settings"
  | "sparkles"
  | "check";

function Icon({ name, size = 24, className }: IconProps & { name: IconName }) {
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
      className={className}
      aria-hidden="true"
    >
      {name === "arrow-right" && (
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      )}
      {name === "zap" && <path d="m13 2-3 8h8L11 22l3-9H6l7-11Z" />}
      {name === "shield-check" && (
        <>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}
      {name === "monitor" && (
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8m-4-4v4" />
        </>
      )}
      {name === "users" && (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="4" />
          <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      )}
      {name === "settings" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 2Z" />
        </>
      )}
      {name === "sparkles" && (
        <>
          <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
          <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
        </>
      )}
      {name === "check" && <path d="m5 12 4 4L19 6" />}
    </svg>
  );
}

const ArrowRight = (props: IconProps) => <Icon name="arrow-right" {...props} />;
const Zap = (props: IconProps) => <Icon name="zap" {...props} />;
const ShieldCheck = (props: IconProps) => (
  <Icon name="shield-check" {...props} />
);
const Monitor = (props: IconProps) => <Icon name="monitor" {...props} />;
const Users = (props: IconProps) => <Icon name="users" {...props} />;
const Settings = (props: IconProps) => <Icon name="settings" {...props} />;
const Sparkles = (props: IconProps) => <Icon name="sparkles" {...props} />;
const Check = (props: IconProps) => <Icon name="check" {...props} />;

const features = [
  {
    title: "Fast & Reliable",
    description:
      "Enjoy a smooth experience with fast and reliable performance.",
    icon: Zap,
    color: "bg-violet-500/15 text-violet-400",
  },
  {
    title: "Secure Platform",
    description: "Keep your account and personal information protected.",
    icon: ShieldCheck,
    color: "bg-blue-500/15 text-blue-400",
  },
  {
    title: "Fully Responsive",
    description: "Work seamlessly across mobile, tablet, and desktop.",
    icon: Monitor,
    color: "bg-emerald-500/15 text-emerald-400",
  },
  {
    title: "Team Collaboration",
    description: "Organize your work and achieve more together.",
    icon: Users,
    color: "bg-pink-500/15 text-pink-400",
  },
  {
    title: "Customizable",
    description: "Enjoy a flexible experience designed around your needs.",
    icon: Settings,
    color: "bg-orange-500/15 text-orange-400",
  },
];

const pricingFeatures = [
  "Access to essential features",
  "Responsive user experience",
  "Secure account access",
  "Easy-to-use dashboard",
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#09090b] text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 h-105 w-175 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              Build something amazing
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Ideas,
              <br />
              Our{" "}
              <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              A modern platform to manage your work, organize your ideas, and
              achieve your goals — all in one place.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sign-up"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 font-semibold text-white shadow-lg shadow-violet-900/25 transition hover:bg-violet-500"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 px-6 font-semibold text-gray-200 transition hover:border-violet-400 hover:bg-white/5"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-violet-400" />
                Easy to use
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-violet-400" />
                Modern design
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-violet-400" />
                Responsive layout
              </span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-violet-600/20 to-blue-600/10 blur-2xl" />

            <div className="relative rounded-2xl border border-white/10 bg-[#111116] p-4 shadow-2xl sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="font-bold">NA ZM UL</p>
                    <p className="text-xs text-gray-500">Workspace overview</p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
                  Active
                </span>
              </div>

              <div className="py-6">
                <p className="text-sm text-gray-400">Welcome back 👋</p>
                <h2 className="mt-1 text-xl font-bold">Your workspace</h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Productivity",
                    value: "94%",
                    color: "text-violet-400",
                  },
                  {
                    label: "Tasks completed",
                    value: "18",
                    color: "text-emerald-400",
                  },
                  { label: "In progress", value: "04", color: "text-blue-400" },
                  {
                    label: "Goals reached",
                    value: "12",
                    color: "text-pink-400",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/2.5 p-4"
                  >
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className={`mt-3 text-2xl font-bold ${item.color}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/2.5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Weekly progress</p>
                  <span className="text-xs text-violet-400">This week</span>
                </div>

                <div className="mt-5 flex h-28 items-end gap-3">
                  {[40, 65, 48, 85, 60, 95, 75].map((height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 flex-col justify-end"
                    >
                      <div
                        className="rounded-t-md bg-linear-to-t from-violet-700 to-blue-400 opacity-90 transition hover:opacity-100"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-[10px] text-gray-500">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <span key={day}>{day}</span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -right-3 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#17131f] text-violet-400 shadow-xl sm:-right-5 sm:-top-5">
              <Zap size={23} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="scroll-mt-24 border-t border-white/5 bg-[#0c0c10] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={15} />
              Why Choose Us
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              Powerful features designed to make your work easier, faster, and
              more productive.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-[#111116] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-[#15131c]"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} transition group-hover:scale-105`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-linear-to-br from-violet-600/10 via-[#111116] to-blue-600/10 p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
                  Simple and flexible
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  Ready to Boost Your Productivity?
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Get started today and explore the tools available on your
                  platform.
                </p>

                <Link
                  href="/sign-up"
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 font-semibold text-white transition hover:bg-violet-500"
                >
                  Create Your Account
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#09090b]/70 p-6">
                <p className="text-sm font-semibold text-gray-300">
                  Included features
                </p>

                <ul className="mt-5 space-y-4">
                  {pricingFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-400"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
                        <Check size={13} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-5 text-gray-500">
                  No pricing or subscription is implied. Availability depends on
                  your application's implemented features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm text-gray-500">
            © 2026 NA ZM UL. All rights reserved.
          </p>

          <Link
            href="/sign-up"
            className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
          >
            Start your journey <ArrowRight className="ml-1 inline" size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
