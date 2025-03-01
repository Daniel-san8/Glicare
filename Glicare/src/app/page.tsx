import About from "@/app/components/about";
import CallToDownload from "@/app/components/call-to-download";
import Contact from "@/app/components/contact";
import ToDoctors from "@/app/components/to-doctors";
import ToPacients from "@/app/components/to-pacients";
import WhoAre from "@/app/components/who-are";

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
