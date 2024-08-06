import Hero from "../components/Hero";
import NavBar from "../components/Nav";
import Partners from "../components/Partners";
import HowItWork from "../components/HowItWork";
import Why from "../components/Why";
import Event from "../components/Event";
import Team from "../components/Team";
import Tool from "../components/Tool";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar/>
      <Hero/>
      <Partners/>
      <HowItWork/>
      <Event/>
      <Team/>
      <Tool/>
      <Why/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
