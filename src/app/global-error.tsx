"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Something went wrong</h2>
          {error?.message && <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>{error.message}</p>}
          <button
            type="button"
            onClick={() => reset()}
            style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
