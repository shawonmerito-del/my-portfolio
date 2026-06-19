import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BINI AMIN SHEIKH | Ultra Premium Cinematic Video Editor & Producer",
  description: "Portfolio of Bini Amin Sheikh, an award-winning Senior Creative Video Editor, Cinematographer, Motion Graphics Designer, and Creative Content Producer. Specialized in crafting stories through motion, commercial ads, and Shopify marketing videos.",
  keywords: [
    "Bini Amin Sheikh",
    "Video Editor Bangladesh",
    "Professional Video Editor",
    "Cinematographer Bangladesh",
    "Motion Graphics Designer",
    "Shopify Video Editor",
    "Creative Content Producer",
    "Adobe Premiere Pro Expert",
    "After Effects Specialist",
    "Video Editing Services Bangladesh"
  ],
  authors: [{ name: "Bini Amin Sheikh" }],
  creator: "Bini Amin Sheikh",
  publisher: "Bini Amin Sheikh",
  openGraph: {
    title: "BINI AMIN SHEIKH | Ultra Premium Cinematic Video Editor",
    description: "Portfolio of Bini Amin Sheikh, an award-winning Senior Creative Video Editor, Cinematographer, Motion Graphics Designer.",
    url: "https://biniaminsheikh.com",
    siteName: "Bini Amin Sheikh Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bini Amin Sheikh - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BINI AMIN SHEIKH | Cinematic Video Editor",
    description: "Award-winning Senior Creative Video Editor, Cinematographer & Motion Designer.",
    images: ["/og-image.jpg"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body 
        suppressHydrationWarning 
        className="min-h-full bg-[#050505] text-[#f4f4f5] font-sans antialiased overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
