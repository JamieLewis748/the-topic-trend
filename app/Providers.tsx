"use client";
import { UserProvider } from "@/context/userContext";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode; }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <UserProvider>
        {children}
      </UserProvider>
    </ThemeProvider>
  );
}

export default Providers;