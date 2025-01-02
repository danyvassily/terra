import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGradient from '../components/BackgroundGradient';

// Importation des images
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/22.avif';
import heartIcon from '../assets/heart-3.png';
import starIcon from '../assets/icons8-etoile-32.png';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('collection');
  const productsContainerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Robe en jersey à col carré",
      price: "452 €",
      image: image3,
      category: "collection",
      description: "Élégance et confort pour toutes les occasions"
    },
    {
      id: 2,
      name: "Short taille haute",
      price: "360 €",
      image: image4,
      category: "collection",
      description: "Style décontracté et sophistiqué"
    },
    {
      id: 3,
      name: "Bikini top",
      price: "200 €",
      image: image5,
      category: "collection",
      description: "Pour un été chic et tendance"
    },
    {
      id: 4,
      name: "Débardeur court",
      price: "250 €",
      image: image6,
      category: "collection",
      description: "Légèreté et style minimaliste"
    },
    {
      id: 5,
      name: "Pantalon à taille élastique",
      price: "398,99 €",
      image: image7,
      category: "collection",
      description: "Confort et élégance au quotidien"
    },
    {
      id: 6,
      name: "Robe longue en soie",
      price: "599 €", 
      image: image8,
      category: "collection",
      description: "Élégance intemporelle en soie naturelle"
    }
  ];

  const filteredProducts = activeCategory === 'tous'
    ? products
    : products.filter(product => product.category === activeCategory);

  useEffect(() => {
    if (productsContainerRef.current) {
      const products = productsContainerRef.current.children;
      gsap.to(products, {
        duration: 0.8,
        opacity: 0,
        scale: 0.5,
        stagger: 0.05,
        onComplete: () => {
          gsap.to(products, {
            duration: 0.8,
            opacity: 1,
            scale: 1,
            stagger: 0.05,
          });
        }
      });
    }
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      <BackgroundGradient />
      <Navbar />

      {/* Section d'en-tête */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light text-center mb-8"
          >
            Notre Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white max-w-2xl mx-auto mb-12 bg-black text-white p-4 rounded-lg shadow-md"
          >
            Découvrez notre sélection exclusive de vêtements de luxe, créés avec passion et raffinement par notre designer HLSV reconnu comme une grande artiste pour la mode dans le domaine du durable.
          </motion.p>
        </div>
      </section>

      {/* Section des catégories */}
      <section className="mb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {['collection', 'parfums', 'decouverte'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-wider py-2 px-4 transition-all ${
                  activeCategory === category
                    ? 'border-b-2 border-black'
                    : 'hover:text-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Section de la grille des produits */}
      <section className="relative z-10">
        <div className="container mx-auto px-4">
          <div ref={productsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                    >
                      <img src={heartIcon} alt="Favoris" className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                    >
                      <img src={starIcon} alt="Note" className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors"
                    >
                      Ajouter
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section de la newsletter */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-light text-center mb-6">
              Restez informé
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  S&apos;inscrire
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;