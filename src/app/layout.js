import { NextAuthProvider } from "@/utils/authProvider";
import "./globals.css";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard made with NextJS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
