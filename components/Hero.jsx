'use client';
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative justify-center items-center">
      <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1, }} transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center">
        <a href='#' className="inline-flex gap-1 border py-1 px-2 rounded-lg border-black/50 dark:border-white/30 transform transition-transform duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-[#3566E1] to-[#B846ED] text-transparent bg-clip-text [-webkit-background-clip:text]">
            Version 1.0
          </span>
          <span className="inline-flex items-center gap-1">
            <span>est là</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
          <h1 className="text-7xl font-ligt tracking-tighter mx-auto md:text-7xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text font-bold">
            Découvrez la nouvelle <br></br>interface de la{' '}
            <span className="relative inline-block bg-gradient-to-r from-[#3566E1] to-[#B846ED] text-transparent bg-clip-text p-1 py-2">
              Logistique
              <span className="absolute top-[0.3rem] right-[-1rem] text-2xl dark:text-white text-black transform scale-150">
                ✦
              </span>
              <span className="absolute top-[-0.4rem] right-[0.3rem] text-2xl dark:text-white text-black transform scale-100">
                ✦
              </span>
            </span>
          </h1>
          <p className="w-full max-w-4xl mx-auto text-foreground/80 text-balance text-xl">
            Une interface permettant aux membres de l&apos;association de gérer leurs inscriptions aux événements organisés par la Web School Factory.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
          <Link href="/signup" passHref>
            <button className="relative inline-flex h-12 overflow-hidden rounded-[10px] p-[1px] focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform transition-transform duration-300 hover:scale-105">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#3566E1_33%,#B846ED_66%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl dark:bg-black dark:text-white">
                Inscrivez-vous
              </span>
            </button>
          </Link>
          <Link href="#howitwork" passHref>
            <button className="relative inline-flex h-12 px-3 py-1 transform transition-transform duration-300 hover:scale-105 border-black border rounded-xl dark:border-white">
              <span className="inline-flex h-full w-full items-center justify-center text-sm font-medium text-black dark:text-white">
                Découvrir
                <ArrowRight className="ml-2 w-4 h-4 text-dark dark:text-white" />
              </span>
            </button>
          </Link>
          </div>
        </motion.div>
      </section>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center -z-10">
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-gradient-to-r from-[#3566E1] to-[#B846ED] blur-[100px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg]"></div>
        </div>
      </motion.div>
    </div>
  );
}
