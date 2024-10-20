import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'react-photo-view/dist/react-photo-view.css';
import { ConvexClientProvider } from './ConvexClientProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/theme-provider';
import { NavBar } from '@/components/NavBar';
import { dark } from '@clerk/themes';
import RequestResourceModal from '@/components/RequestResourceModal';
import { Toaster } from 'sonner';
import { metadata as generatedMetadata } from '@/data/MetaData';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = generatedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ConvexClientProvider>
            {/* eslint-disable react/no-unknown-property */}
            <div vaul-drawer-wrapper="" className="bg-background">
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <NavBar />
                <Toaster position="top-center" expand={true} richColors />
                {children}
                <RequestResourceModal />
              </ThemeProvider>
            </div>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
