import "../styles/globals.css";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className="p-8 space-y-8">
        <header>
          <h2 className="flex space-x-4 pl-[0.15rem] pb-4 text-2xl">
            <a href="/?lang=en-us">🇺🇸</a>
            <a href="/?lang=pt-br">🇧🇷</a>
          </h2>
          <h1>Gabi</h1>
        </header>
        <section>{children}</section>
      </body>
    </html>
  );
}
