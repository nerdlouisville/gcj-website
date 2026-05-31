import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Tickets    from "./components/Tickets";
import Events     from "./components/Events";
import Hotel      from "./components/Hotel";
import Vendors    from "./components/Vendors";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import BackToTop  from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Tickets />
        <Events />
        <Hotel />
        <Vendors />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
