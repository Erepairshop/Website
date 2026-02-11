"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael S.",
    company: "eRepairShop",
    text: "Professionelle Arbeit von Anfang bis Ende. Die Website sieht nicht nur fantastisch aus, sondern hat auch unsere Kundenanfragen deutlich erhöht. Absolute Empfehlung!",
    rating: 5,
  },
  {
    name: "Sandra K.",
    company: "Lokales Geschäft",
    text: "Schnelle Umsetzung, faire Preise und immer erreichbar bei Fragen. Meine neue Website ist genau so, wie ich sie mir vorgestellt habe. Vielen Dank!",
    rating: 5,
  },
  {
    name: "Thomas M.",
    company: "Startup Gründer",
    text: "Die Web-App für unser Startup wurde pünktlich und im Budget geliefert. Die Zusammenarbeit war unkompliziert und das Ergebnis übertrifft unsere Erwartungen.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Was <span className="text-accent">Kunden</span> sagen
          </h2>
          <p className="text-muted">
            Feedback von zufriedenen Kunden
          </p>
        </motion.div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="relative h-[300px] md:h-[250px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="glass rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center relative">
                  <Quote className="absolute top-6 left-6 w-8 h-8 text-accent/20" />

                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="text-center text-lg md:text-xl mb-6 text-foreground/90">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>

                  <div className="text-center">
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="p-3 rounded-full glass hover:border-accent/50 hover:text-accent transition-all"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-6"
                      : "bg-muted/50 hover:bg-muted"
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-3 rounded-full glass hover:border-accent/50 hover:text-accent transition-all"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
