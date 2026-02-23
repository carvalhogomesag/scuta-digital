import { motion } from 'motion/react';
import { Layout, Zap, MessageSquare, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: Layout,
    title: "High-Converting Landing Pages",
    description: "We don't just build pages; we build sales tools. Every element is designed to turn visitors into paying customers."
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Nobody likes a slow site. Our pages load in the blink of an eye, keeping your visitors happy and engaged."
  },
  {
    icon: MessageSquare,
    title: "Clear, Simple Messaging",
    description: "We help you speak to your customers in plain English. No tech jargon, just clear reasons why they should choose you."
  },
  {
    icon: BarChart3,
    title: "Results You Can See",
    description: "We set up simple tracking so you can see exactly how many people are contacting you through your new site."
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-zinc-50 border border-black/5"
                >
                  <solution.icon className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">{solution.title}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">How We Help</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">We handle the tech, so you can handle the business.</h3>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              At Scuta Digital, we believe the internet should be easy. You don't need to know what 'hosting' or 'DNS' means to have a world-class website. 
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Custom design tailored to your brand",
                "Fully mobile-responsive (looks great on phones)",
                "Secure and reliable hosting included",
                "Ongoing support and updates"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-800 font-medium">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-8 py-4 bg-black text-white rounded-2xl font-semibold text-lg hover:bg-zinc-800 transition-all">
              See Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
