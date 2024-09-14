import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
    title: {
        default: 'Disney Clone | Powered by Next.js',
        template: '%s | Disney Clone',
    },
    description: 'This is a disney clone based on Next.js',
    icons: {
        icon: '/favicon.jpeg'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-[#1A1C29]'>
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
