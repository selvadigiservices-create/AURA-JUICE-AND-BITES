import { useRef } from "react";
import Slider from "react-slick";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Fresh Orange Juice",
    description: "Pure, hand-squeezed oranges bursting with vitamin C and natural sweetness",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 2,
    name: "Mango Milkshake",
    description: "Creamy blend of fresh mangoes and premium milk for the perfect indulgence",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 3,
    name: "Mint Mojito",
    description: "Refreshing mint leaves with lime and sparkling water for the ultimate coolness",
    image: "https://images.unsplash.com/photo-1653542772393-71ffa417b1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-green-400 to-emerald-600",
  },
  {
    id: 4,
    name: "Gourmet Burger",
    description: "Premium beef patty with fresh vegetables and special sauce on a toasted bun",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-amber-500 to-red-600",
  },
  {
    id: 5,
    name: "Steamed Momos",
    description: "Delicate dumplings filled with fresh vegetables, served with spicy chutney",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-rose-400 to-pink-600",
  },
];

export function FeaturedProducts() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured
            </span>{" "}
            Delights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved creations, crafted with passion and premium ingredients
          </p>
        </motion.div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {featuredProducts.map((product, index) => (
              <div key={product.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative rounded-3xl overflow-hidden bg-white shadow-2xl"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${product.color} opacity-20`} />
                    </div>
                    <div className="p-8 md:p-12">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            Fresh
                          </span>
                          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                            Premium
                          </span>
                          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                            Popular
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
