import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
    title: {
        default: 'Disney+ Hotstar',
        template: '%s | Powered by Next.js',
    },
    description: 'Next.js tutorial',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-white dark:bg-[#1A1C29]'>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
