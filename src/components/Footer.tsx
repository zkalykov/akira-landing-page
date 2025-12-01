

export const Footer = () => {
  return (
    <footer className="relative bg-white text-black pt-20 pb-0 px-6 md:px-12 overflow-hidden">

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">AKIRA</span>
          </div>
          <p className="text-gray-600 text-sm">
            Empowering creators to build stunning websites instantly with AI.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black transition-colors">Showcase</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Enterprise</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black transition-colors">About</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 pb-10">
        <p>&copy; 2024 Akira AI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="mt-0 w-full -mx-6 md:-mx-12 min-w-[calc(100%+3rem)] md:min-w-[calc(100%+6rem)]">
        <img 
          src="/kg-banner.png" 
          alt="Footer Banner" 
          className="w-full h-64 md:h-96 object-cover block"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
          }}
        />
      </div>
    </footer>
  );
};
