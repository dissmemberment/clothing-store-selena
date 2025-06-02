import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            О магазине TechZone
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Инновации, качество и технологии будущего. Мы предлагаем современную
            электронику и гаджеты для активной цифровой жизни.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* История бренда */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Наша история</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Магазин TechZone был основан в 2020 году с простой, но
                амбициозной целью — предоставлять доступ к самым современным
                технологиям и качественной электронике для всех любителей
                инноваций.
              </p>
              <p>
                Начав с небольшого ассортимента смартфонов и аксессуаров, мы
                постепенно расширили каталог, добавив компьютерную технику,
                аудиоустройства, умные гаджеты и игровое оборудование. Каждый
                товар отбирается с особым вниманием к качеству и
                функциональности.
              </p>
              <p>
                Сегодня TechZone — это магазин, которому доверяют тысячи
                покупателей по всей России. Мы продолжаем развиваться и радовать
                клиентов новинками технологий.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
              alt="Магазин и товары TechZone"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Миссия и ценности */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Icon
                  name="Zap"
                  size={48}
                  className="mx-auto mb-4 text-purple-600"
                />
                <h3 className="text-xl font-semibold mb-3">Инновации</h3>
                <p className="text-gray-600">
                  Отбираем только самые передовые технологии и проверенные
                  бренды. Каждый товар — это качество и надёжность.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Icon
                  name="Cpu"
                  size={48}
                  className="mx-auto mb-4 text-purple-600"
                />
                <h3 className="text-xl font-semibold mb-3">Технологии</h3>
                <p className="text-gray-600">
                  Следим за новинками рынка и предлагаем актуальные решения,
                  которые делают жизнь удобнее и интереснее.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Icon
                  name="Shield"
                  size={48}
                  className="mx-auto mb-4 text-purple-600"
                />
                <h3 className="text-xl font-semibold mb-3">Гарантия</h3>
                <p className="text-gray-600">
                  Предоставляем полную гарантию на всю продукцию и стремимся
                  превзойти ожидания в сервисе и послепродажной поддержке.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Команда */}
        <section className="bg-gray-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Наша команда
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Алексей Технов"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Алексей Технов</h3>
                <p className="text-gray-600">Основатель и IT-директор</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                  alt="Мария Гаджетова"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Мария Гаджетова</h3>
                <p className="text-gray-600">Менеджер по закупкам</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Дмитрий Инновация"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Дмитрий Инновация</h3>
                <p className="text-gray-600">
                  Специалист по технической поддержке
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
