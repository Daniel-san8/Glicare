import About from "./components/about";
import CallToDownload from "./components/call-to-download";
import Contact from "./components/contact";
import ToDoctors from "./components/to-doctors";
import ToPacients from "./components/to-pacients";
import WhoAre from "./components/who-are";

export default function Home() {
  return (
    <div>
      <CallToDownload />
      <ToPacients />
      <ToDoctors />
      <About />
      <Contact />
      <WhoAre />
    </div>
  )
}
