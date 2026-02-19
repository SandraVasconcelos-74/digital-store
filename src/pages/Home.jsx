import Hero from "../components/home/Hero"
import FeaturedProducts from "../components/home/FeaturedProducts"
import PromoBanner from "../components/home/PromoBanner"
import Newsletter from "../components/home/Newsletter"


const featured = products.filter(p => p.featured);

function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProducts products={featured} />
      <PromoBanner />
      <Newsletter />
    </div>
  )
}

export default Home
