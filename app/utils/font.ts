// font.ts
import { Forum, Noto_Sans } from "next/font/google";

export const forum = Forum({
  subsets: ["latin"],
  weight: "400", // Only one weight available for Forum
  variable: "--font-forum", // Optional: for CSS variable use
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "900", "100", "300", "400", "500", "600"], // You can choose the weights you want
  variable: "--font-noto-sans", // Optional: for CSS variable use
});
