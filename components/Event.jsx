'use client';

import { motion } from "framer-motion";

export default function Event() {
  return (
    <section id="events" className="relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col gap-3 justify-center items-center"
        >
          <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
            Nos événements
          </h4>
          <p className="max-w-xl text-foreground/80 text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
    </section>
  );
}
