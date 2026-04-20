import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-[var(--fg-2)]">
        404
      </p>
      <h1
        className="font-display font-bold tracking-tight text-[var(--fg-0)]"
        style={{ fontSize: "var(--display-sm)" }}
      >
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-[length:var(--text-lg)] text-[var(--fg-1)]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--portfolio-accent)] px-6 py-3 text-[length:var(--text-sm)] font-medium text-[var(--bg-0)] transition-colors hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
