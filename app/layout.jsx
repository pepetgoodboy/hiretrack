import { Figtree } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "../store/provider";
import { ToastContainer } from "react-toastify";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata = {
  title: "Hire Track",
  description: "Track your intern or job applications here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} antialiased`}>
        <ReduxProvider>
          {children}
          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
