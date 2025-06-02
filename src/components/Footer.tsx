import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-montserrat">SELENA</h3>
            <p className="text-gray-400">
              Стильная летняя одежда
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                <Icon name="Instagram" size={16} />
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                <Icon name="Facebook" size={16} />
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                <Icon name="Twitter" size={16} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Платья
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Футболки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Низ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обувь
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Размеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (993) 935-59-45
              </p>
              <p className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                vladislavonecare@gmail.com
              </p>
              <p className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                Новосибирск, ул. Ленина 12
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SELENA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
