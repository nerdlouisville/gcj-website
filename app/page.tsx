import Nav     from "./components/Nav";
import Hero    from "./components/Hero";
import About   from "./components/About";
import Tickets from "./components/Tickets";
import Hotel   from "./components/Hotel";
import Vendors from "./components/Vendors";
import Contact from "./components/Contact";
import Footer  from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Tickets />
        <Hotel />
        <Vendors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
