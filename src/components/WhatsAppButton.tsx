import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "351914044748"; // Formato internacional para Portugal
  const message = "Olá! Gostaria de pedir um orçamento para um projeto.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Círculo de pulsação (Aura) */}
      <motion.div
        className="absolute inset-0 bg-emerald-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Botão Real */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 transition-colors"
        aria-label="Contactar via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}