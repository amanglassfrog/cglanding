import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],  // You can add more subsets like 'cyrillic', 'vietnamese', etc.
  weight: ["400", "500", "700"],  // You can specify which weights you need.
  style: "normal",  // Or 'italic' if needed.
});

export const metadata = {
  title: "Create a Winning CV in Minutes, Free CV Builder – Start Today",
  description: "Create a professional resume in minutes with our free UK resume builder and CV builder. Start now to land your dream job quickly!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
