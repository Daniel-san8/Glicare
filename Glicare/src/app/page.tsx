import Contact from "@/app/components/contact";
import CallToDownload from "./components/call-to-download";
import WhoAre from "./components/who-are";

export default function Home() {
  return (
    <div>
      <CallToDownload/>
      <Contact/>
      <WhoAre/>
  </div>
  )
}
