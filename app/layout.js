import SideBar from "@/components/sections/SideBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={`antialiased`}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
