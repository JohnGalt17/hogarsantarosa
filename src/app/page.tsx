import { siteData } from "@/lib/site-data";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { SimpleInfo } from "@/components/SimpleInfo";
import { Location } from "@/components/Location";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SocialFloats } from "@/components/SocialFloats";

export default function HomePage() {
  const data = siteData;

  return (
    <>
      <Header data={data} />
      <main>
        <Hero data={data} />
        <VideoSection data={data} />
        <SimpleInfo data={data} />
        <Location data={data} />
        <FAQ data={data} />
      </main>
      <Footer data={data} />
      <SocialFloats data={data} />
    </>
  );
}
