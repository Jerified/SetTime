import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Detail from "@/components/Detail";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <Category />
      <Services />
      <Detail />
    </main>
  )
}
