import { motion } from "motion/react";

const showcaseProducts = [
  {
    id: 1,
    name: "Orange Juice",
    tagline: "Pure Vitamin C Blast",
    description: "Hand-squeezed from premium oranges, delivering nature's best vitamin C in every sip. No added sugar, just pure freshness.",
    ingredients: ["Fresh Oranges", "Natural Pulp", "No Preservatives"],
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gradient: "from-orange-400 via-orange-500 to-red-500",
  },
  {
    id: 2,
    name: "Mango Shake",
    tagline: "Tropical Paradise in a Glass",
    description: "Creamy blend of fresh Alphonso mangoes and premium milk, creating the perfect balance of sweetness and richness.",
    ingredients: ["Alphonso Mangoes", "Fresh Milk", "Vanilla Ice Cream", "Honey"],
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gradient: "from-yellow-400 via-orange-400 to-orange-500",
  },
  {
    id: 3,
    name: "Mint Mojito",
    tagline: "Refreshment Redefined",
    description: "Fresh mint leaves muddled with lime and sparkling water, creating the ultimate refreshing experience on a hot day.",
    ingredients: ["Fresh Mint", "Lime Juice", "Sparkling Water", "Ice"],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Signature{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our premium beverages, crafted to perfection with the finest ingredients
          </p>
        </motion.div>

        <div className="space-y-32">
          {showcaseProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative group">
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                  />

                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${product.gradient} opacity-20`} />
                  </div>

                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      x: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="space-y-6"
                >
                  <div>
                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${product.gradient} text-white rounded-full text-sm font-medium mb-4`}>
                      {product.tagline}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                      {product.name}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Ingredients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient) => (
                        <span
                          key={ingredient}
                          className="px-4 py-2 bg-muted rounded-full text-sm text-foreground"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Loved by thousands
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
