import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"], // Add more subsets if needed
  weight: ["400", "500", "700"], // Specify required weights
  style: "normal", // Or 'italic'
});

export const metadata = {
  title: "Create a Winning CV in Minutes, Free CV Builder – Start Today",
  description: "Create a professional resume in minutes with our free UK resume builder and CV builder. Start now to land your dream job quickly!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6K59SB18FT"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6K59SB18FT');
            `,
          }}
        />
      </Head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
