import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ShoppingCart, Send, Plus, Minus, Trash2, Phone, Clock, MapPin, CreditCard, Banknote, QrCode, X, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_DATA } from './constants';
import { CartItem, MenuItem, PaymentMethod } from './types';

// Sound utility
const playSound = (type: 'add' | 'remove' | 'click') => {
  const sounds = {
    add: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
    remove: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
    click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'
  };
  const audio = new Audio(sounds[type]);
  audio.volume = 0.2;
  audio.play().catch(() => {}); // Ignore errors if browser blocks autoplay
};

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(MENU_DATA.map(item => item.category)));
    if (cats.length > 0 && !activeCategory) setActiveCategory(cats[0]);
    return cats;
  }, [activeCategory]);

  const addToCart = (item: MenuItem) => {
    playSound('add');
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    playSound('remove');
    setCart(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.id !== id);
    });
  };

  const clearCart = () => {
    playSound('remove');
    setCart([]);
  };

  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }, [cart]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const sendOrder = () => {
    playSound('click');
    if (cart.length === 0) return;

    const orderList = cart.map(item => `${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`).join('\n');
    const message = `*Novo Pedido - Lili Lanches*\n\n${orderList}\n\n*Total:* ${formatCurrency(total)}\n*Forma de Pagamento:* ${paymentMethod || 'Não selecionada'}\n\n_Enviado via Cardápio Digital_`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5532988087004?text=${encodedMessage}`, '_blank');
  };

  // Scroll to category
  const scrollToCategory = (cat: string) => {
    playSound('click');
    setActiveCategory(cat);
    const element = document.getElementById(`category-${cat}`);
    if (element) {
      const offset = 140; // Header + Sticky Nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-32 font-sans text-lili-purple">
      {/* Header */}
      <header className="bg-lili-purple pt-8 pb-16 px-6 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-lili-yellow rounded-full rotate-12" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-8 border-lili-orange rounded-3xl -rotate-12" />
        </div>

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mx-auto max-w-2xl relative z-10"
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="bg-lili-orange p-3 rounded-[2.5rem] shadow-2xl border-4 border-lili-yellow transform -rotate-3 overflow-hidden max-w-[220px]"
            >
              <img 
                src="https://i.ibb.co/JLCFVQL/lili.png" 
                alt="Lili Lanches Logo" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] md:text-xs text-lili-yellow font-bold border border-white/10">
              <Clock size={14} />
              <span>19h às 23:45 | Seg a Dom (Exceto Quarta)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] md:text-xs text-white font-bold border border-white/10">
              <Phone size={14} />
              <span>(32) 98808-7004</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Sticky Category Nav */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth" ref={scrollContainerRef}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => scrollToCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeCategory === cat 
                  ? 'bg-lili-orange text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu Content */}
      <main className="max-w-4xl mx-auto p-4 mt-4 space-y-12">
        {categories.map(category => (
          <section key={category} id={`category-${category}`} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1.5 bg-lili-orange rounded-full" />
              <h2 className="text-2xl font-black uppercase italic tracking-tighter text-lili-purple">
                {category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MENU_DATA.filter(item => item.category === category).map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow group relative overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-lili-yellow/10 rounded-bl-full -mr-6 -mt-6 transition-all group-hover:scale-150" />
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Star size={12} className="text-lili-orange fill-lili-orange" />
                        <h3 className="font-bold text-base md:text-lg leading-tight">{item.name}</h3>
                      </div>
                      {item.description && (
                        <p className="text-xs text-gray-500 line-clamp-2 italic leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-black text-lili-red italic">
                        {formatCurrency(item.price)}
                      </span>
                      
                      <button 
                        onClick={() => addToCart(item)}
                        className="bg-lili-yellow text-lili-purple h-10 w-10 rounded-xl flex items-center justify-center hover:bg-lili-orange hover:text-white transition-all active:scale-90 shadow-sm"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Cart Button / Summary */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-white text-lili-purple rounded-3xl shadow-2xl overflow-hidden border-4 border-lili-yellow">
              {/* Cart Header/Toggle */}
              <div 
                className="p-5 flex items-center justify-between cursor-pointer bg-lili-yellow hover:bg-lili-orange hover:text-white transition-colors"
                onClick={() => {
                  playSound('click');
                  setIsCartOpen(!isCartOpen);
                }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 font-black uppercase italic text-lg">
                    <ShoppingCart size={24} />
                    <span>Seu Pedido ({cart.length})</span>
                  </div>
                  {!isCartOpen && (
                    <div className={`flex items-center gap-1 text-xs font-black uppercase ${paymentMethod ? 'opacity-70' : 'text-red-600 animate-pulse'}`}>
                      <CreditCard size={14} />
                      <span>{paymentMethod || 'PENDENTE - CLIQUE AQUI'}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-black italic">
                    {formatCurrency(total)}
                  </div>
                  <motion.div 
                    animate={{ rotate: isCartOpen ? 180 : 0 }}
                    className="bg-black/10 p-1 rounded-full"
                  >
                    <ChevronRight size={24} className={isCartOpen ? '-rotate-90' : ''} />
                  </motion.div>
                </div>
              </div>

              {/* Cart Details */}
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="max-h-[60vh] overflow-y-auto bg-white"
                  >
                    <div className="p-4 space-y-4">
                      {cart.map(item => (
                        <motion.div 
                          layout
                          key={item.id} 
                          className="flex items-center justify-between border-b border-gray-100 pb-3 gap-3"
                        >
                          <div className="flex-1">
                            <h4 className="font-black text-sm uppercase italic">{item.name}</h4>
                            <p className="text-xs text-gray-400">{formatCurrency(item.price)} cada</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200">
                              <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="text-lili-purple hover:bg-white hover:shadow-sm p-1.5 rounded-lg transition-all"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="font-black w-8 text-center text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => addToCart(item)} 
                                className="text-lili-purple hover:bg-white hover:shadow-sm p-1.5 rounded-lg transition-all"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <button 
                              onClick={() => {
                                playSound('remove');
                                setCart(prev => prev.filter(i => i.id !== item.id));
                              }}
                              className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </motion.div>
                      ))}

                      {/* Payment Method Selection */}
                      <div className={`mt-6 space-y-4 p-5 rounded-2xl border-2 transition-all ${!paymentMethod ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center gap-2 text-lili-purple font-black uppercase text-sm">
                          <CreditCard size={20} className={!paymentMethod ? 'text-red-500 animate-bounce' : ''} />
                          <span className={!paymentMethod ? 'text-red-600' : ''}>
                            {!paymentMethod ? 'ESCOLHA O PAGAMENTO:' : 'Forma de Pagamento:'}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'DINHEIRO', icon: Banknote, label: 'Dinheiro' },
                            { id: 'CARTÃO', icon: CreditCard, label: 'Cartão' },
                            { id: 'PIX', icon: QrCode, label: 'PIX' }
                          ].map(method => (
                            <button
                              key={method.id}
                              onClick={() => {
                                playSound('click');
                                setPaymentMethod(method.id as PaymentMethod);
                              }}
                              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-2 ${
                                paymentMethod === method.id 
                                  ? 'border-lili-orange bg-white shadow-lg text-lili-orange scale-105' 
                                  : 'border-transparent bg-white/50 text-gray-400 hover:border-gray-200'
                              }`}
                            >
                              <method.icon size={28} />
                              <span className="text-[10px] font-black uppercase tracking-tighter">{method.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={clearCart}
                        className="w-full py-3 text-xs font-black text-red-500 hover:bg-red-50 rounded-xl flex items-center justify-center gap-2 transition-colors uppercase italic"
                      >
                        <Trash2 size={16} />
                        CANCELAR TODO O PEDIDO
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Send Button */}
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={sendOrder}
                  disabled={!paymentMethod}
                  className={`w-full font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl uppercase italic tracking-widest text-lg ${
                    !paymentMethod 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-green-200'
                  }`}
                >
                  {!paymentMethod ? (
                    <>
                      <CreditCard size={24} />
                      SELECIONE E FINALIZE
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      Enviar Pedido
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      <footer className="mt-12 p-8 text-center text-xs text-gray-400 space-y-4">
        <div className="flex justify-center gap-4 flex-wrap grayscale opacity-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
        </div>
        <p>Aceitamos CARTÕES (consultar bandeiras).</p>
        <p>© 2026 Lili Lanches - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
