import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="flex flex-col gap-y-16">
      <Navbar />
      <main className="space-y-32 mb-12">
        {children}
      </main>
      <Footer />
    </body>
  );
}