import { siteData } from "@/lib/site-data";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SimpleInfo } from "@/components/SimpleInfo";
import { Location } from "@/components/Location";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  const data = siteData;

  return (
    <>
      <Header data={data} />
      <main>
        <Hero data={data} />
        <SimpleInfo data={data} />
        <Location data={data} />
        <FAQ data={data} />
      </main>
      <Footer data={data} />
      <WhatsAppFloat data={data} />
    </>
  );
}
