import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  { title: 'Risotto ai Funghi', price: '$24', desc: 'Arbolio con hongos porcini y parmesano.', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400' },
  { title: 'Pasta Carbonara', price: '$22', desc: 'Spaghetti fresco con guanciale y pecorino.', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400' },
  { title: 'Osso Buco', price: '$32', desc: 'Carrillón de ternera con gremolata.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
  { title: 'Bruschetta', price: '$14', desc: 'Pan artesanal con tomate y albahaca.', img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400' },
  { title: 'Tiramisú', price: '$12', desc: 'Postre clásico italiano.', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
  { title: 'Lasagna', price: '$26', desc: 'Capas de pasta con ragú de res.', img: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400' },
]

const features = [
  { icon: 'fa-wine-glass', title: 'Vinos Premium', desc: 'Selección de vinos italianos' },
  { icon: 'fa-concierge-bell', title: 'Servicio Exclusivo', desc: 'Atención personalizada' },
  { icon: 'fa-leaf', title: 'Ingredientes Frescos', desc: 'Productos orgánicos locales' },
  { icon: 'fa-music', title: 'Ambiente Único', desc: 'Música en vivo' },
]

function App() {
  const heroRef = useRef(null)
  const menuRef = useRef(null)
  const featuresRef = useRef(null)

  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-content > *', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.3 }
    )
    gsap.fromTo('.hero-image img',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    )

    // Menu scroll animation
    gsap.fromTo('.menu-item',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: menuRef.current,
          start: 'top 80%',
        }
      }
    )

    // Features animation
    gsap.fromTo('.feature-box',
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-50 py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-white no-underline">
            DELI<span className="text-[#c9a227]">ZIA</span>
          </a>
          <nav className="flex items-center gap-6">
            <a href="#menu" className="text-white no-underline font-medium hover:text-[#c9a227] transition">Menú</a>
            <a href="#reservas" className="bg-[#c9a227] text-[#0a0a0a] px-6 py-2 rounded-full font-semibold no-underline hover:bg-[#b8911f] transition">Reservar</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-[#0a0a0a] to-[#12121f]">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-12">
          <div className="hero-content flex-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
              Donde Cada Plato<br /><span className="text-[#c9a227]">Es Arte</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">Descubre la verdadera esencia de la gastronomía italiana.</p>
            <a href="#reservas" className="inline-block bg-[#c9a227] text-[#0a0a0a] px-8 py-3 rounded-full font-bold no-underline hover:bg-[#b8911f] transition">
              Reservar
            </a>
          </div>
          <div className="hero-image flex-1 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" 
              alt="Restaurant" 
              className="w-full max-w-lg rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section ref={menuRef} id="menu" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Nuestro Menú</h2>
          <p className="text-gray-400 text-center mb-12">Recetas tradicionales con toque moderno</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
              <div key={i} className="menu-item bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#c9a227]/50 transition">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-2xl font-bold text-[#c9a227]">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-[#c9a227]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="feature-box text-center p-8 bg-white/5 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-5 bg-[#c9a227]/20 rounded-full flex items-center justify-center text-[#c9a227] text-2xl">
                  <i className={`fas fa-${feature.icon}`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="reservas" className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#12121f] text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vive la Experiencia<br /><span className="text-[#c9a227]">Delizia</span></h2>
          <p className="text-gray-400 mb-8">Reserva tu mesa hoy</p>
          <a href="#" className="inline-block bg-[#c9a227] text-[#0a0a0a] px-8 py-4 rounded-full font-bold hover:bg-[#b8911f] transition">
            Reservar Ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050508] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <a href="#" className="text-3xl font-bold text-white no-underline">
                DELI<span className="text-[#c9a227]">ZIA</span>
              </a>
              <p className="text-gray-500 text-sm mt-4">Donde cada plato es una obra de arte.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horario</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>Lun - Jue: 12:00 - 22:00</li>
                <li>Vie - Sáb: 12:00 - 23:00</li>
                <li>Domingo: 12:00 - 21:00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Menú</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 no-underline hover:text-white transition text-sm">Entradas</a></li>
                <li><a href="#" className="text-gray-500 no-underline hover:text-white transition text-sm">Platos</a></li>
                <li><a href="#" className="text-gray-500 no-underline hover:text-white transition text-sm">Postres</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><i className="fas fa-map-marker-alt mr-2"></i> Guayaquil</li>
                <li><i className="fas fa-phone mr-2"></i> +593 99 999 9999</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-600 text-sm">
            © 2026 Delizia. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Contactar por WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  )
}

export default App
