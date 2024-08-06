'use client';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { motion } from 'framer-motion';
import React from 'react';

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-2xl text-foreground/80 text-center mb-8 text-balance">
          Pour toute question ou assistance supplémentaire, notre équipe est disponible par e-mail pour vous fournir toute l'aide dont vous pourriez avoir besoin.
        </p>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full max-w-2xl border border-foreground/50 rounded-md p-2">
          <Accordion
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: 'auto',
                  transition: {
                    height: {
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      duration: 0.5,
                    },
                    opacity: {
                      easings: 'ease',
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: 'ease',
                      duration: 0.25,
                    },
                    opacity: {
                      easings: 'ease',
                      duration: 0.2,
                    },
                  },
                },
              },
            }}>
            <AccordionItem
              key="1"
              aria-label="Comment me connecter ?"
              title="Comment me connecter ?"
              className="transition-max-height duration-300 ease-in-out overflow-hidden max-h-32">
              Utilisez votre compte Google de l'école pour vous connecter.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Est-ce que l'application est sécurisée ?"
              title="Est-ce que l'application est sécurisée ?"
              className="transition-max-height duration-300 ease-in-out overflow-hidden max-h-32">
              Oui, toutes les données sont protégées et l'authentification se fait via Google.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Puis-je gérer plusieurs inscriptions en même temps ?"
              title="Puis-je gérer plusieurs inscriptions en même temps ?"
              className="transition-max-height duration-300 ease-in-out overflow-hidden max-h-32">
              Oui, toutes vos inscriptions sont centralisées dans une seule interface.
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Puis-je utiliser l'application sur mon mobile ?"
              title="Puis-je utiliser l'application sur mon mobile ?">
              Oui, l'application est entièrement compatible avec les appareils mobiles et peut être utilisée sur iOS et Android via notre site web mobile.
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Puis-je modifier ou annuler une inscription ?"
              title="Puis-je modifier ou annuler une inscription ?"
              className="transition-max-height duration-300 ease-in-out overflow-hidden max-h-32">
              Oui, vous pouvez modifier ou annuler vos inscriptions directement depuis votre tableau de bord jusqu'à la date limite spécifiée pour chaque événement.
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
