import { motion } from "motion/react";
import { Link } from "react-router";

const categories = [
  {
    id: 1,
    name: "Fresh Juices",
    description: "Pure, natural fruit juices packed with vitamins",
    image: "https://images.unsplash.com/photo-1577680716097-9a565ddc2007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 2,
    name: "Milkshakes",
    description: "Thick, creamy shakes in delicious flavors",
    image: "https://images.unsplash.com/photo-1575159240102-4331f59433ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    id: 3,
    name: "Mojitos",
    description: "Refreshing mint-based mocktails",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    name: "Lassi",
    description: "Traditional yogurt-based drinks",
    image: "https://images.unsplash.com/photo-1662192511709-e75d67367638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 5,
    name: "Pani Puri",
    description: "Crispy puris with tangy flavored water",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 6,
    name: "French Fries",
    description: "Crispy golden fries with special seasoning",
    image: "https://images.unsplash.com/photo-1630384082956-f527aae44bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: 7,
    name: "Bread Omelette",
    description: "Fluffy eggs with soft bread slices",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 8,
    name: "Burgers",
    description: "Gourmet burgers with premium toppings",
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    id: 9,
    name: "Momos",
    description: "Steamed dumplings with spicy chutney",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From refreshing beverages to savory bites, we have something for every craving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to="/menu" className="block">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-80 transition-opacity duration-500`} />
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-6 -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground mt-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
