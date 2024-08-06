'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

export default function Why() {
  return (
    <section id="why" className="relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col gap-3 justify-center items-center"
        >
          <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
            Pourquoi utiliser notre outil ?
          </h4>
          <p className="max-w-xl text-foreground/80 text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col gap-3 justify-center items-center"
        >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <Image src="/img/test.jpg" alt="Icon 1" className="w-16 h-16 mb-4" width={120}height={120}/>
            <h5 className="text-lg font-semibold">Gain de Temps</h5>
            <p className="text-sm text-center">Processus d'inscription rapide et simplifié.</p>
          </div>
          <div className="flex flex-col items-center">
          <Image src="/img/test.jpg" alt="Icon 2" className="w-16 h-16 mb-4" width={120}height={120}/>
            <h5 className="text-lg font-semibold">Facilité d'Utilisation</h5>
            <p className="text-sm text-center">Interface conviviale et accessible sur tous les appareils.</p>
          </div>
          <div className="flex flex-col items-center">
          <Image src="/img/test.jpg" alt="Icon 3" className="w-16 h-16 mb-4" width={120}height={120}/>
            <h5 className="text-lg font-semibold">Gestion Efficace</h5>
            <p className="text-sm text-center">Centralisation des inscriptions et des informations.</p>
          </div>
        </div>
        </motion.div>
      </section>
  );
}