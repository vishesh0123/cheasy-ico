import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from '@mui/material/styles';
import "./globals.css";
import theme from '@/theme';
import Web3ModalProvider from '@/context'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CheasySwap ICO",
  description: "CheasySwap ICO Launch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Web3ModalProvider>
              {children}
            </Web3ModalProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
