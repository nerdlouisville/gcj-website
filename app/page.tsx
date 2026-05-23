import Nav     from "./components/Nav";
import Hero    from "./components/Hero";
import About   from "./components/About";
import Tickets from "./components/Tickets";
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
        <Vendors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
