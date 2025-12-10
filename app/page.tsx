"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Welcome to BuildCOF</h1>

      <div className="flex gap-4 mt-6">
        <Link
          href="/auth/login"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Login
        </Link>

        <Link
          href="/auth/register"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
