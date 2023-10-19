import './globals.css'
import Head from "./Head";
import Header from "./Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="bg-gray-100 transition-all duration-700">
        <Header />
        <div
          className='max-w-6xl mx-auto'
        >
          {children}
        </div>
      </body>
    </html >
  );
}
