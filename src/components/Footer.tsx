export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-lg tracking-tight">Scuta Digital</span>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-500 font-medium">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-black transition-colors">Cookies</a>
        </div>

        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Scuta Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
