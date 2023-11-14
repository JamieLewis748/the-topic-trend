"use client";
import { UserProvider } from "@/context/userContext";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode; }) {
  return (
    <UserProvider>
      {/* <ThemeProvider enableSystem={true} attribute="class">
      </ThemeProvider> */}
      {children}
    </UserProvider>
  );
}

export default Providers;