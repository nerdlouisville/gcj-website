import Nav         from "./components/Nav";
import EmailBanner from "./components/EmailBanner";
import Hero        from "./components/Hero";
import About      from "./components/About";
import Tickets    from "./components/Tickets";
import Events     from "./components/Events";
import RaffleTeaser from "./components/RaffleTeaser";
import Hotel      from "./components/Hotel";
import Vendors    from "./components/Vendors";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import BackToTop  from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <EmailBanner />
        <About />
        <Tickets />
        <Events />
        <RaffleTeaser />
        <Hotel />
        <Vendors />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
