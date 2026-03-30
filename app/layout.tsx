import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-pink-50">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow fixed w-full top-0 z-50">
          <h1 className="text-2xl font-bold text-pink-500">
            Aballoon Indonesia
          </h1>

          <div className="space-x-6">
            <a href="#home" className="hover:text-pink-500">
              Home
            </a>
            <a href="#products" className="hover:text-pink-500">
              Products
            </a>
            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </div>
        </nav>

        {/* Content halaman */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-white text-center py-6 mt-10 border-t">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Aballoon Indonesia
          </p>
        </footer>
      </body>
    </html>
  );
}
