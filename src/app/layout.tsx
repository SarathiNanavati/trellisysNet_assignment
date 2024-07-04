import { DefaultLayoutProps } from "@/common/common.types";
import "@/styles/globals.css";

export default function RootLayout({ children }: DefaultLayoutProps) {
  return (
    <html lang='en'>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
