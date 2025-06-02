import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black font-montserrat">
              SELENA
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-purple-600 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-purple-600 transition-colors"
            >
              Новинки
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-purple-600 transition-colors"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-purple-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
