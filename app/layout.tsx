import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-montserrat",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daffatravel.youvitation.net"), // ganti dengan domain asli

  title: {
    default: "Banyu Bening Trans | Travel Brebes - Jakarta PP | Carter & Antar Jemput",
    template: "%s | Banyu Bening Trans",
  },

  description:
    "Banyu Bening Trans merupakan jasa travel Brebes terpercaya melayani rute Brebes - Jakarta PP, antar jemput bandara, carter mobil, dan pengiriman paket dengan armada nyaman serta driver profesional.",

  keywords: [
    "travel brebes",
    "travel sirampog",
    "travel brebes jakarta",
    "travel jakarta brebes",
    "travel banyu bening",
    "Banyu Bening Trans",
    "travel jawa tengah",
    "travel antar jemput",
    "travel bandara",
    "travel murah brebes",
    "travel nyaman",
    "travel terpercaya",
    "travel door to door",
    "travel brebes bandara",
    "travel purwokerto jakarta",
  ],

  authors: [
    {
      name: "Banyu Bening Trans",
    },
  ],

  creator: "Banyu Bening Trans",

  publisher: "Banyu Bening Trans",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://daffatravel.youvitation.net",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://daffatravel.youvitation.net",
    siteName: "Banyu Bening Trans",
    title: "Banyu Bening Trans | Travel Brebes Terpercaya",
    description:
      "Travel Brebes terpercaya melayani Brebes - Jakarta PP, Carter Mobil, Antar Jemput Bandara dan Pengiriman Paket.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Banyu Bening Trans",
    description:
      "Travel Brebes Terpercaya - Door to Door - Armada Nyaman",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
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
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
