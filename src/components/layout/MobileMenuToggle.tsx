import { createSignal, Show } from "solid-js";

interface MobileMenuToggleProps {
  menuItems: string[];
}

export default function MobileMenuToggle(props: MobileMenuToggleProps) {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <button 
        class="lg:hidden z-50 relative p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div class="w-6 h-6 relative">
          <span class={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen() ? 'rotate-45 top-2.5' : 'top-0.5'
          }`}></span>
          <span class={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out top-2.5 ${
            isMenuOpen() ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span class={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen() ? '-rotate-45 top-2.5' : 'top-4.5'
          }`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <Show when={isMenuOpen()}>
        <div 
          class="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden"
          onClick={closeMenu}
        ></div>
      </Show>

      {/* Mobile Menu */}
      <div class={`fixed top-0 right-0 h-full w-80 max-w-[80%] bg-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen() ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div class="flex flex-col h-full">
          {/* Menu Header */}
          <div class="flex items-center justify-between p-6 border-b border-dark-gray">
            <h2 class="text-xl font-semibold text-white">Menu</h2>
            <button 
              onClick={closeMenu}
              class="w-8 h-8 flex items-center justify-center text-white hover:bg-dark-gray rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div class="flex-1 py-6">
            <ul class="space-y-2">
              {props.menuItems.map((item) => (
                <li>
                  <a 
                    href="#" 
                    class="flex items-center justify-between px-6 py-4 text-lg text-white hover:bg-dark-gray transition-colors"
                    onClick={closeMenu}
                  >
                    <span>{item}</span>
                    <span class="text-[10px] font-medium bg-dark-gray text-white/50 px-2 py-1 rounded-full">
                      Soon!
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Footer */}
          <div class="p-6 border-t border-dark-gray">
            <div class="text-sm text-white/70 mb-4">
              Take a seat! →
            </div>
            <button class="w-full bg-blue hover:bg-dark-blue border-2 border-dark-blue cursor-not-allowed text-white px-6 py-4 rounded-2xl transition-colors">
              Coming Soon!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
