import "../styles/globals.css";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className="p-8 space-y-8">
        <header>
          <h1>Gabi</h1>
        </header>
        <section>{children}</section>
      </body>
    </html>
  );
}
