import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Abstract background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to start your digital journey?</h3>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
              Stop losing customers to your competitors. Let's build a page that represents your business the way it deserves.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Email Us</p>
                  <p className="text-lg font-medium">hello@scutadigital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Call Us</p>
                  <p className="text-lg font-medium">+1 (555) 000-SCUTA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-lg font-medium">Miami, FL & Remote</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 md:p-12 rounded-[40px] border border-white/5 relative z-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Business Type</label>
                <select className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                  <option>Local Business</option>
                  <option>E-commerce</option>
                  <option>Professional Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>
              <button className="w-full py-5 bg-emerald-500 text-black font-bold text-lg rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
