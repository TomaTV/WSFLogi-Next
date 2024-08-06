'use client';
import { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Image from 'next/image';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const menuItems = [
    { title: 'Accueil', href: '#home' },
    { title: 'Comment ça fonctionne ?', href: '#howitwork' },
    { title: 'Événements', href: '#events' },
    { title: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
        if (scrollTop > lastScrollTop) {
          setShowNavbar(false); // Scroll down
        } else {
          setShowNavbar(true); // Scroll up
        }
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar
      maxWidth="xl"
      className={`fixed top-0 left-0 w-full transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-opacity-70 bg-background backdrop-blur-md' // Vous pouvez ajuster ou supprimer cette classe si nécessaire
          : 'bg-transparent backdrop-blur-none backdrop-saturate-100'
      }`}
    >
      <NavbarItem className="flex-shrink-0 mt-4">
        <Link href="#home">
          <Image
            src="/img/logi-b.svg" // Remplacez par le chemin de votre logo en mode clair
            alt="Logo"
            className="h-40 w-auto dark:hidden" // Cacher cette version en mode sombre
            width={120}
            height={40}
          />
          <Image
            src="/img/logi-w.svg" // Remplacez par le chemin de votre logo en mode sombre
            alt="Logo"
            className="h-40 w-auto hidden dark:block" // Cacher cette version en mode clair
            width={120}
            height={40}
          />
        </Link>
      </NavbarItem>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.title}-${index}`}>
            <Button
              as="a"
              href={item.href}
              variant="light"
              onClick={e => handleScrollTo(e, item.href)}
            >
              {item.title}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="/login">
            <button
              className="border text-sm font-medium relative border-foreground-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              <span>Connexion</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#B846ED] to-transparent h-px dark:bg-gradient-to-r dark:from-transparent dark:via-[#3566E1] dark:to-transparent" />
            </button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
              color="foreground"
              onClick={e => handleScrollTo(e, item.href)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
