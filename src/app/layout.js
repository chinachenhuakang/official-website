/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-21 16:26:29
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-21 17:22:21
 * @Description: 
 */
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "官网",
  description: "打造一个好看的官网",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
