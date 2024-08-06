'use client';
import { useEffect, useRef } from 'react';

export default function Partners() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 0.35; // Vitesse de défilement
    let position = 0;

    // Dupliquer les logos pour créer un effet de défilement infini
    const children = Array.from(container.children);
    children.forEach(child => {
      container.appendChild(child.cloneNode(true));
    });

    const animateScroll = () => {
      position += speed;
      const scrollWidth = container.scrollWidth / 2; // Largeur totale pour le défilement

      if (position >= scrollWidth) {
        position = 0;
      }

      container.style.transform = `translateX(${-position}px)`;
      requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animateScroll);
  }, []);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
      <div class="text-center mb-1 text-sm font-bold uppercase tracking-wider text-[#3566E1] dark:text-[#B846ED]">
        NOS PARTENAIRES
      </div>
        <h2 className="text-center text-2xl leading-8 text-foreground-900 ext-transparent bg-clip-text font-">
          Ils font confiance à la Web School Factory
        </h2>
        <div className="relative mt-16 overflow-hidden" style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}>
          <div className="flex items-center space-x-16" ref={containerRef} style={{ whiteSpace: 'nowrap' }}>
            <img alt="Logo 1" src="/img/partenaires/black/qonto.png" className="inline-block max-h-13 w-auto object-contain dark:hidden"/>
            <img alt="Logo 2" src="/img/partenaires/black/clariane.png" className="inline-block max-h-12 w-auto object-contain dark:hidden"/>
            <img alt="Logo 3" src="/img/partenaires/black/kéa.png" className="inline-block max-h-12 w-auto object-contain dark:hidden"/>
            <img alt="Logo 4" src="/img/partenaires/black/engie.png" className="inline-block max-h-12 w-auto object-contain dark:hidden"/>
            <img alt="Logo 5" src="/img/partenaires/black/ratp.png" className="inline-block max-h-13 w-auto object-contain dark:hidden"/>
            <img alt="Logo 6" src="/img/partenaires/black/aramis.png" className="inline-block max-h-13 w-auto object-contain dark:hidden"/>
            <img alt="Logo 7" src="/img/partenaires/black/bouygues.png" className="inline-block max-h-13 w-auto object-contain dark:hidden"/>
            <img alt="Logo 8" src="/img/partenaires/black/CréditNord.png" className="inline-block max-h-13 w-auto object-contain dark:hidden"/>
            <img alt="Logo 9" src="/img/partenaires/black/Loxam.png" className="inline-block max-h-13 w-auto object-contain dark:hidden"/>
            <img alt="Logo 10" src="/img/partenaires/black/Onepoint.png" className="inline-block max-h-12 w-auto object-contain dark:hidden"/>
            <img alt="Logo 11" src="/img/partenaires/black/SaintGobain.png" className="inline-block max-h-13 w-auto object-contain dark:hidden"/>
            <img alt="Logo 12" src="/img/partenaires/black/Bpi.png" className="inline-block max-h-13 w-auto object-contain dark:hidden"/>
            
            <img alt="Logo 1" src="/img/partenaires/white/qonto.png" className="inline-block max-h-13 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 2" src="/img/partenaires/white/clariane.png" className="inline-block max-h-12 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 3" src="/img/partenaires/white/kéa.png" className="inline-block max-h-12 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 4" src="/img/partenaires/white/engie.png" className="inline-block max-h-12 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 5" src="/img/partenaires/white/ratp.png" className="inline-block max-h-13 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 6" src="/img/partenaires/white/aramis.png" className="inline-block max-h-13 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 7" src="/img/partenaires/white/bouygues.png" className="inline-block max-h-13 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 8" src="/img/partenaires/white/CréditNord.png" className="inline-block max-h-13 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 9" src="/img/partenaires/white/Loxam.png" className="inline-block max-h-13 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 10" src="/img/partenaires/white/Onepoint.png" className="inline-block max-h-12 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 11" src="/img/partenaires/white/SaintGobain.png" className="inline-block max-h-13 w-auto object-contain dark:inline-block"/>
            <img alt="Logo 12" src="/img/partenaires/white/Bpi.png" className="inline-block max-h-13 w-auto object-contain dark:inline-block"/>
          </div>
        </div>
      </div>
    </div>
  );
}
