import React from "react";
import AdminSidebar from "@/Components/admin/adminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <body className="flex h-screen">
      <div className="w-64">
        <AdminSidebar />
      </div>
      <main className="flex-1 p-6 flex justify-center items-start overflow-y-auto">
        <div className="w-full max-w-6xl">{children}</div>
      </main>
    </body>
  );
}