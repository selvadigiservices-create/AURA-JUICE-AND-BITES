import { useRef } from "react";
import Slider from "react-slick";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Blogger",
    rating: 5,
    comment: "The freshness of their juices is unmatched! I've been a regular customer for months now, and the quality never disappoints. Highly recommended!",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Fitness Enthusiast",
    rating: 5,
    comment: "Perfect post-workout refreshment! Their protein shakes and fresh juices are exactly what I need after a gym session. Great taste and healthy too!",
    avatar: "RV",
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "College Student",
    rating: 5,
    comment: "Love their momos and burgers! The quality is premium and prices are reasonable. My go-to place for snacks between classes.",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Corporate Professional",
    rating: 5,
    comment: "Quick service and amazing taste! I often order during lunch breaks, and they never fail to deliver fresh and delicious food.",
    avatar: "VS",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    role: "Homemaker",
    rating: 5,
    comment: "My family loves their variety! From juices to snacks, everything is prepared with care and tastes absolutely fresh. Will definitely keep coming back!",
    avatar: "SR",
  },
];

export function Reviews() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real people who love what we create
          </p>
        </motion.div>

        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <div key={review.id} className="px-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {review.comment}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
