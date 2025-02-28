import About from "./components/about";
import CallToDownload from "./components/call-to-download";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <CallToDownload />
      <Contact />
      <About />
    </div>
  )
}
