"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function PostLogin(prevState: unknown, formData: FormData) {
  const cookie = await cookies();

  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const res = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawData),
  });

  if (!res.ok) {
    return {
      defaults: rawData,
      success: false,
      message: "Invalid credentials",
    };
  }

  const data = await res.json();

  // Optional: Store token or session info from `data` if needed
  cookie.set("token", JSON.stringify(data));

  redirect("/admin");
}

export async function Logout() {
  const cookie = await cookies();

  const res = await fetch("http://localhost:3001/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.error("Something went wrong..");
    return;
  }

  cookie.delete("token");

  redirect("/login");
}