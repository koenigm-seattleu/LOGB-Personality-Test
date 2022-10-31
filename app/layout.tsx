import '../styles/globals.css';
import Footer from './Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
