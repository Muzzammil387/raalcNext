import About from "@/components/Common/About";
import Blog from "@/components/Common/Blog";
import Contact from "@/components/Common/Contact";
import Cto from "@/components/Common/Cto";
import Faq from "@/components/Common/Faq";
import Footer from "@/components/Common/Footer";
import Funfact from "@/components/Common/Funfact";
import HowWeWork from "@/components/Common/HowWeWork";
import Partner from "@/components/Common/Partner";
import Price from "@/components/Common/Price";
import Services from "@/components/Common/Services";
import Skill from "@/components/Common/Skill";
import Strategy from "@/components/Common/Strategy";
import Subscribe from "@/components/Common/Subscribe";
import Team from "@/components/Common/Team";
import Testimonial from "@/components/Common/Testimonial";
import Welcome from "@/components/Common/Welcome";
import WhoWeAre from "@/components/Common/WhoWeAre";
import Work from "@/components/Common/Work";
import Navbar from "@/components/Layout/Navbar";
import MainBannerOne from "@/components/PageBanners/MainBannerOne";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBannerOne />

      <Welcome />

      <About />

      <Strategy />

      <WhoWeAre />

      <Cto />

      <Skill />

      <Funfact />

      <Team />

      <HowWeWork />

      <Services />

      <Work />

      <Price />

      <Faq />

      <Testimonial />

      <Blog />

      <Partner />

      <Subscribe />

      <Contact />

      <Footer />
    </>
  );
}