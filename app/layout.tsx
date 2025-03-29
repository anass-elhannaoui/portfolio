import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Anass El Hannaoui | Cloud & AI Engineer',
    template: '%s | Anass El Hannaoui'
  },
  description: 'Cloud Solutions Architect and AI Engineer specializing in scalable systems, machine learning implementations, and DevOps automation.',
  keywords: [
    'Cloud Engineering',
    'Machine Learning',
    'DevOps',
    'AWS',
    'Azure',
    'TensorFlow',
    'Data Science',
    'Full Stack Development'
  ],
  authors: [{ name: 'Anass El Hannaoui' }],
  creator: 'Anass El Hannaoui',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Anass El Hannaoui | Cloud & AI Engineer',
    description: 'Building intelligent cloud-native solutions and scalable architectures',
    siteName: 'Anass El Hannaoui',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anass El Hannaoui Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anass El Hannaoui | Cloud & AI Engineer',
    description: 'Building intelligent cloud-native solutions and scalable architectures',
    images: ['https://yourdomain.com/og-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen bg-background pt-16">
            {children}
          </main>
          {/* Footer could be added here */}
        </ThemeProvider>
      </body>
    </html>
  );
}