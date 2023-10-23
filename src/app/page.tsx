import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Detail from "@/components/Detail";
import Reviews from "@/components/Reviews";
import Update from "@/components/Update";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <Category />
      <Services />
      <Detail />
      <Reviews />
      <Update />
    </main>
  )
}
