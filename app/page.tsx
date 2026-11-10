import Nav         from "./components/Nav";
import Hero        from "./components/Hero";
import EmailBanner from "./components/EmailBanner";
import About       from "./components/About";
import Vendors     from "./components/Vendors";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";
import BackToTop   from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <EmailBanner />
        <About />
        <Vendors />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
