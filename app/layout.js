import "@/style/globals.css";
import "@/style/commonStyles.css";
import { Roboto, Dosis, Poiret_One } from 'next/font/google';
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Header from "@/components/HomePage/Shared/header/Header";
import Footer from "@/components/HomePage/Shared/footer/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import ScheduleFloatingBtn from "@/components/common/ScheduleFloatingBtn";
import LiveChat from "@/components/common/LiveChat";

const poiretOne = Poiret_One({
  weight: ['400'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
})

const dosis = Dosis({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
})

export const metadata = {
  title: "TechForing | Cybersecurity Consulting for Businesses & Individuals",
  description: "TechForing protects business and personal IT infrastructure with tailored cybersecurity consulting services for ironclad protection. Contact us to learn more,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${dosis.className} ${poiretOne.className}`}>
        <Header />
        {children}
        <Footer />
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
          <ScrollToTopButton />
          <ScheduleFloatingBtn />
          <LiveChat />
        </div>
      </body>
    </html>
  );
}
