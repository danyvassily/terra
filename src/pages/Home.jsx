import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGradient from '../components/BackgroundGradient';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../assets/1.png';
import jeuneFemmeImage from '../assets/jeunefemme.png';
import page2Image from '../assets/page 2.jpg';
import grosplanImage from '../assets/grosplan1.png';
import bikiniImage from '../assets/5.jpg';
import pullImage from '../assets/4.jpg';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const textsRef = useRef([]);

  useEffect(() => {
    // Nettoyer les anciens ScrollTriggers
    const triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => trigger.kill());

    // Animation des sections
    sectionsRef.current.forEach((section) => {
      if (!section) return;

      // Animation principale de la section
      gsap.fromTo(section,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Animation des images avec effet parallaxe
    imagesRef.current.forEach((img) => {
      if (!img) return;

      gsap.fromTo(img,
        {
          y: 100,
          scale: 1.2,
          rotation: 4,
        },
        {
          y: -100,
          scale: 1,
          rotation: -5,
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Animation des textes
    textsRef.current.forEach((text) => {
      if (!text) return;

      gsap.fromTo(text,
        {
          x: -100,
          opacity: 0,
          rotationY: 45,
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const addToImagesRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  const addToTextsRefs = (el) => {
    if (el && !textsRef.current.includes(el)) {
      textsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden font-['Cormorant_Garamond']">
      <BackgroundGradient />
      <Navbar />
      
      {/* Section Héro */}
      <motion.section 
        className="relative h-screen w-full"
        ref={addToRefs}
      >
        <div className="w-full h-full">
          <img 
            ref={addToImagesRefs}
            src={heroImage}
            alt="Collection Printemps-Été 2024"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          ref={addToTextsRefs}
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light text-center leading-tight mb-6">
            TERRA FRANCE
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest">
            COLLECTION PRINTEMPS-ÉTÉ 2024
          </p>
        </div>
      </motion.section>

      {/* Déclaration de la Marque */}
      <section ref={addToRefs} className="bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div 
            ref={addToTextsRefs}
            className="text-xl md:text-2xl font-light leading-relaxed text-gray-800"
          >
            Terra incarne l&apos;élégance durable, où le luxe rencontre l&apos;écoresponsabilité. 
            Chaque création est une ode à la femme moderne, consciente et raffinée.
          </div>
        </div>
      </section>

      {/* Collection en Vedette */}
      <section ref={addToRefs} className="py-20 bg-gray-50 overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 
            ref={addToTextsRefs}
            className="text-3xl md:text-4xl font-light text-center mb-16"
          >
            COLLECTION SIGNATURE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group w-full h-[600px]">
              <img 
                ref={addToImagesRefs}
                src={jeuneFemmeImage}
                alt="femme jeune qui marche" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="relative group w-full h-[600px]">
              <img 
                ref={addToImagesRefs}
                src={page2Image}
                alt="tshirt" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-light mb-2">T-shirt</h3>
                <p className="text-lg">360 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Développement Durable */}
      <section ref={addToRefs} className="py-20 bg-white overflow-hidden w-full">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              ref={addToTextsRefs}
              className="text-center md:text-left space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-light">La mode écoresponsable et locale</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed bg-black text-white p-4 hover:bg-gray-800 rounded-lg">
                Chez Terra, chaque vêtement est pensé pour allier style, durabilité et respect de la planète. Nous utilisons des matériaux biologiques, recyclés et innovants, et collaborons avec des artistes locaux pour créer des pièces uniques et authentiques. Avec une mode éthique et intemporelle, nous refusons la fast fashion pour construire un futur où consommer mieux rime avec style. Rejoignez le mouvement Terra !
              </p>
            </div>

            <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
              <img 
                ref={addToImagesRefs}
                src={pullImage}
                alt="Pull en laine écologique" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Derniers Produits */}
      <section ref={addToRefs} className="py-20 bg-gray-50 overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 
            ref={addToTextsRefs}
            className="text-3xl md:text-4xl font-light text-center mb-16"
          >
            DERNIÈRES CRÉATIONS
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* produits */}
            <div className="group relative w-full h-[600px] mb-12">
              <img 
                ref={addToImagesRefs}
                src={bikiniImage}
                alt="Bikini top" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-light mb-2">Bikini top</h3>
                <p className="text-lg">200 €</p>
              </div>
            </div>
            
            {/* Call to action */}
            <div 
              ref={addToTextsRefs}
              className="flex flex-col items-center justify-center p-8 mt-8"
            >
              <h3 className="text-3xl md:text-4xl font-light tracking-wider hover:text-green-500 transition-colors duration-300 cursor-pointer uppercase bg-black text-white p-6 hover:bg-gray-800 rounded-lg text-center">
                Venez découvrir notre collection
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 