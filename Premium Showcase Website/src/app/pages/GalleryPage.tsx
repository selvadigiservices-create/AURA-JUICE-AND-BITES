import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry from "react-responsive-masonry";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Fresh Orange Juice",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Mango Shake",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1653542772393-71ffa417b1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Mint Mojito",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Gourmet Burger",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Steamed Momos",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1613478223719-2ab802602423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Orange Juice Glass",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1577680716097-9a565ddc2007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Fruit Juice",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Classic Mojito",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Cheese Burger",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Dumpling Dish",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1575159240102-4331f59433ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Milkshake",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1662192511709-e75d67367638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Lassi",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

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
              Gallery
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our delicious offerings and happy moments
          </p>
        </motion.div>

        <Masonry columnsCount={3} gutter="20px">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-6">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <ZoomIn className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
