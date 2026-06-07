import { HeroSection } from "../components/home/HeroSection";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { CategoryShowcase } from "../components/home/CategoryShowcase";
import { ProductShowcase } from "../components/home/ProductShowcase";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Reviews } from "../components/home/Reviews";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
      <ProductShowcase />
      <WhyChooseUs />
      <Reviews />
    </div>
  );
}
