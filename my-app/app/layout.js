import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Modern Next App",
  description: "A clean and modern demo application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <nav className="nav-wrapper">
          <div className="container nav-content">
            <Link href="/" className="logo">
              DemoApp
            </Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/articles" className="nav-link">Articles</Link>
              <Link href="/posts" className="nav-link">Posts</Link>
            </div>
          </div>
        </nav>
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <footer style={{
          padding: '2rem 0',
          textAlign: 'center',
          borderTop: '1px solid var(--border)',
          color: 'var(--secondary)',
          background: 'white'
        }}>
          <div className="container">
            © {new Date().getFullYear()} DemoApp. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
