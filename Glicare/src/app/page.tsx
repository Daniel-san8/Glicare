import About from "./components/about";
import CallToDownload from "./components/call-to-download";
import Contact from "./components/contact";
import ToPacients from "./components/to-pacients";
import WhoAre from "./components/who-are";

export default function Home() {
  return (
    <div>
      <CallToDownload />
      <ToPacients />
      <About />
      <Contact />
      <WhoAre />
    </div>
  )
}
