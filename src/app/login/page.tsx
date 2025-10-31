"use client"
import { useActionState } from "react";
import Link from "next/link";
import { PostLogin } from "@/data/PostLogin";

const AdminLogin = () => {
  const [state, action, isPending] = useActionState(PostLogin, {
    defaults: {
      email: "",
      password: ""
    },
    success: false,
    message: ""
  })

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-800">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6 text-white">
          Admin Login
        </h1>
        {state.message && <p className="text-red-400 text-center mb-4">{state.message}</p>}

        <form className="space-y-4" action={action}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-200"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={state.defaults.email}
              className="w-full p-3 bg-neutral-800 border border-neutral-700 text-white rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-200"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue={state.defaults.password}
              className="w-full p-3 bg-neutral-800 border border-neutral-700 text-white rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            disabled={isPending}
            type="submit"
            className="w-full uppercase bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 transition"
          >
            {isPending ? "Pending..." : "Login"}
          </button>
          <button
            type="button"
            className="w-full uppercase bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 transition"
          >
            <Link href={"/"}>Go back</Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;