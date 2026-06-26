import type { Metadata } from "next";
import ReactQueryProvider from "@/shared/providers/react-query-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todoリスト",
  description: "ToDoを投稿して快適なタスクマネジメントをしよう",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
