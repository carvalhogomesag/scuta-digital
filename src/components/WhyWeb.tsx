import { motion } from 'motion/react';
import { Globe, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Globe,
    title: "Your 24/7 Storefront",
    description: "Even when you're sleeping, your website is open. It's the first place people look to see if you're legitimate and professional."
  },
  {
    icon: Users,
    title: "First Impressions Matter",
    description: "In today's world, no website often means 'no business' to many customers. A clean page builds instant trust."
  },
  {
    icon: TrendingUp,
    title: "Be Found Where It Counts",
    description: "When people search for what you do on Google, a website ensures you show up in the results instead of your competitors."
  },
  {
    icon: ShieldCheck,
    title: "You Own Your Space",
    description: "Social media can change or disappear. Your website is yours—you control the message, the look, and the customer experience."
  }
];

export default function WhyWeb() {
  return (
    <section id="why" className="py-24 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">The Big Question</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Why does my business need a website in 2026?</h3>
          <p className="text-lg text-zinc-600">
            The world has changed. Having a digital presence isn't just a 'nice to have' anymore—it's the foundation of how modern businesses survive and thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                <reason.icon className="w-7 h-7 text-zinc-900 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">{reason.title}</h4>
              <p className="text-zinc-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
