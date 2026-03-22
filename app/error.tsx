"use client";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <main className={inter.className}>
      <h1>Something went wrong</h1>
      <p>We couldn&apos;t load the trending companies right now.</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
