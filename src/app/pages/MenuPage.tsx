import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Fresh Orange Juice",
    category: "Fresh Juices",
    description: "Pure hand-squeezed orange juice packed with vitamin C",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    name: "Watermelon Juice",
    category: "Fresh Juices",
    description: "Refreshing watermelon juice perfect for hot days",
    image: "https://images.unsplash.com/photo-1577680716097-9a565ddc2007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    name: "Mango Milkshake",
    category: "Milkshakes",
    description: "Creamy blend of fresh mangoes and premium milk",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 4,
    name: "Chocolate Shake",
    category: "Milkshakes",
    description: "Rich chocolate shake with ice cream",
    image: "https://images.unsplash.com/photo-1575159240102-4331f59433ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 5,
    name: "Mint Mojito",
    category: "Mojitos",
    description: "Fresh mint with lime and sparkling water",
    image: "https://images.unsplash.com/photo-1653542772393-71ffa417b1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 6,
    name: "Lemon Mojito",
    category: "Mojitos",
    description: "Tangy lemon with mint and soda",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 7,
    name: "Mango Lassi",
    category: "Lassi",
    description: "Traditional yogurt drink with fresh mango",
    image: "https://images.unsplash.com/photo-1662192511709-e75d67367638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 8,
    name: "Sweet Lassi",
    category: "Lassi",
    description: "Classic sweet yogurt drink",
    image: "https://images.unsplash.com/photo-1604298331663-de303fbc7059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 9,
    name: "Crispy French Fries",
    category: "French Fries",
    description: "Golden crispy fries with special seasoning",
    image: "https://images.unsplash.com/photo-1630384082956-f527aae44bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 10,
    name: "Cheese Fries",
    category: "French Fries",
    description: "Fries topped with melted cheese",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 11,
    name: "Classic Burger",
    category: "Burgers",
    description: "Juicy beef patty with fresh vegetables",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 12,
    name: "Cheese Burger",
    category: "Burgers",
    description: "Double cheese with premium beef",
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 13,
    name: "Veg Momos",
    category: "Momos",
    description: "Steamed dumplings with vegetable filling",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 14,
    name: "Chicken Momos",
    category: "Momos",
    description: "Steamed dumplings with chicken filling",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 15,
    name: "Masala Pani Puri",
    category: "Pani Puri",
    description: "Crispy puris with spicy tangy water",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 16,
    name: "Bread Omelette",
    category: "Bread Omelette",
    description: "Fluffy omelette with soft bread slices",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const categories = [
  "All",
  "Fresh Juices",
  "Milkshakes",
  "Mojitos",
  "Lassi",
  "French Fries",
  "Burgers",
  "Momos",
  "Pani Puri",
  "Bread Omelette",
];

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Complete Menu
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of fresh juices, shakes, and delicious bites
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for your favorite item..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg focus:shadow-xl transition-all duration-300 outline-none focus:ring-2 focus:ring-primary border border-border"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold text-foreground">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-white text-foreground hover:bg-muted shadow hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mb-6 text-muted-foreground">
          Showing {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">
              No items found. Try adjusting your search or filter.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
