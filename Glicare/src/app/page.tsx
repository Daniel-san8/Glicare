import Contact from "@/app/components/contact";
import AboutUs from "@/app/components/about_us";
import CallToDownload from "./components/call-to-download";

export default function Home() {
  return (
    <div>
      <CallToDownload/>
      <Contact/>
      <AboutUs/>
  </div>
  )
}
