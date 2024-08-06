import "./globals.css";
import Appbar from "@/components/Appbar";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../theme/colors.stylex";

const main = stylex.create({
  base: {
    backgroundColor: colors.accent2,
    height: "100%",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div {...stylex.props(main.base)}>
          <Appbar />
          {children}
        </div>
      </body>
    </html>
  );
}
