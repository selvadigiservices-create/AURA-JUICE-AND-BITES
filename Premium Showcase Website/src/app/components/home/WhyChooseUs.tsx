import { motion } from "motion/react";
import { Leaf, Award, Shield, Heart, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source only the freshest, locally-sourced ingredients daily to ensure premium quality.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every product meets our high standards of excellence, crafted with precision and care.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Hygienic Preparation",
    description: "Strict hygiene protocols and sanitized environment to ensure your safety.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each creation is prepared with passion and dedication to bring you the best taste.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description: "Quick preparation without compromising on quality or taste.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We go the extra mile to exceed expectations.",
    color: "from-orange-500 to-red-600",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aura?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us stand out in delivering exceptional taste and quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                10,000+
              </div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-1">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Menu Items</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Fresh & Natural</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
