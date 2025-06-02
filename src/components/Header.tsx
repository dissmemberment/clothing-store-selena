import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-beige-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-brown-900 font-montserrat tracking-wide">
              SELENA
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-brown-700 hover:text-brown-900 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brown-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-brown-700 hover:text-brown-900 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brown-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Новинки
            </a>
            <a
              href="#"
              className="text-brown-700 hover:text-brown-900 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brown-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-brown-700 hover:text-brown-900 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brown-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-brown-700 hover:text-brown-900 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brown-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-beige-100 transition-colors duration-200"
            >
              <Icon name="Search" size={20} className="text-brown-700" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-beige-100 transition-colors duration-200"
            >
              <Icon name="ShoppingBag" size={20} className="text-brown-700" />
              <span className="absolute -top-1 -right-1 bg-brown-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                2
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-beige-100 transition-colors duration-200"
            >
              <Icon name="User" size={20} className="text-brown-700" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
