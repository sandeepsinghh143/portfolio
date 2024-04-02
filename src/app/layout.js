import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins(
  { subsets: ["latin"],
    weight:["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"] ,
    display:'swap'
  },
);

export const metadata = {
  title: "Sandeep Singh",
  description: "sandeep portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className+"w-[90vh] xl:w-[1200px] mx-auto text-xl dark:text-[#82829e]"}>
        <Provider>
        <Header/>
        {children}
        <Footer/>
        </Provider>
        </body>
    </html>
  );
}
