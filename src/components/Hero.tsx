import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Now accepting US clients
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
            Your business deserves a <span className="text-emerald-600">digital home</span> that works.
          </h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-xl leading-relaxed">
            We build simple, beautiful, and high-converting landing pages for businesses that want to grow without the technical headache.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-2xl font-semibold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group">
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-black border border-zinc-200 rounded-2xl font-semibold text-lg hover:bg-zinc-50 transition-all">
              View Our Work
            </button>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-6">
            {['No hidden fees', 'Fast delivery', 'Mobile optimized'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/5">
            <img 
              src="https://picsum.photos/seed/webdesign/1200/900" 
              alt="Modern Web Design" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-black/5 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-xl">98%</span>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">Client Satisfaction</p>
                <p className="text-xs text-zinc-500">Based on 50+ US projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
