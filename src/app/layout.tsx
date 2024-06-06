import StoreProvider from "@/app/StoreProvider";
import "@/app/globals.css";
import { ReactNode } from "react";
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
