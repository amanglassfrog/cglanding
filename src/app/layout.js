import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
      <head>
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
        {/* Microsoft Clarity Tag */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "pdtndu8jye");
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
