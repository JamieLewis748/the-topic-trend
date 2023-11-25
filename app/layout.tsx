import './globals.css';
import Head from "next/head";

import Header from "./Header";
import Providers from './Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Topic Trend</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="" />
      </Head>
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
          <div className='max-w-6xl mx-auto'>{children}
          </div>
        </Providers>
      </body>
    </html >
  );
}
