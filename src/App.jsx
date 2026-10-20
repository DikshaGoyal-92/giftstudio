import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import { Truck, Gift, Sparkles, Clock, ArrowRight } from 'lucide-react';

function App() {
  const features = [
    {
      icon: <Truck className="w-5 h-5 text-gray-800" />,
      title: 'Pan-India Delivery',
      desc: 'Carefully packaged and delivered across 10,000+ pin codes',
    },
    {
      icon: <Gift className="w-5 h-5 text-gray-800" />,
      title: 'Custom Hampers',
      desc: 'Build your own gift box with artisanal sweets and gifts',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gray-800" />,
      title: 'Curated Elegance',
      desc: 'Handpicked gourmet snacks, luxury decor, and keepsakes',
    },
    {
      icon: <Clock className="w-5 h-5 text-gray-800" />,
      title: 'Same-Day Express',
      desc: 'Available in Mumbai, Delhi NCR, and Bengaluru',
    },
  ];

  const quickCategories = [
    {
      title: 'Bestseller Hampers',
      subtitle: 'Most Loved Curations',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop',
      link: '#bestsellers',
    },
    {
      title: 'Birthdays & Anniversaries',
      subtitle: 'Celebrate Milestones',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
      link: '#birthdays',
    },
    {
      title: 'Corporate & Bulk Gifts',
      subtitle: 'Branded Luxury Boxes',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600&auto=format&fit=crop',
      link: '#corporate',
    },
    {
      title: 'Create Your Own Hamper',
      subtitle: 'Personalized Touch',
      image: 'https://images.unsplash.com/photo-1577998474517-7eeeed22b39a?q=80&w=600&auto=format&fit=crop',
      link: '#create-your-own',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col text-gray-900 font-sans">
      {/* Luxury E-Commerce Header */}
      <Header />

      {/* Hero Banner Slider */}
      <main className="flex-1">
        <HeroSlider />

        {/* Feature Highlights Strip */}
        <section className="border-b border-gray-100 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, index) => (
              <div key={index} className="flex items-center gap-3.5 p-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{feat.title}</h4>
                  <p className="text-xs text-gray-500">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Category Teasers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2">
              EXQUISITE COLLECTIONS
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900">
              Explore Our Gifting Universe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickCategories.map((cat, idx) => (
              <a
                key={idx}
                href={cat.link}
                className="group block relative overflow-hidden rounded-lg bg-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-4/5 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs text-amber-300 font-medium tracking-wider uppercase mb-1">
                    {cat.subtitle}
                  </p>
                  <h3 className="text-lg font-serif font-medium">{cat.title}</h3>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-white/90 group-hover:text-amber-300 transition">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Note */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800 text-center text-xs text-gray-400">
        <p className="tracking-wide">
          © {new Date().getFullYear()} The Gift Studio. Inspired luxury curations & gifting experiences.
        </p>
      </footer>
    </div>
  );
}

export default App;
