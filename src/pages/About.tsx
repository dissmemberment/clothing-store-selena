import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            О магазине SELENA
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Стиль, качество и элегантность. Мы предлагаем современную одежду и
            аксессуары для активной и стильной жизни.
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
                Магазин SELENA был основан в 2020 году с простой, но амбициозной
                целью — предоставлять доступ к самой стильной и качественной
                одежде для всех ценителей моды.
              </p>
              <p>
                Начав с небольшого ассортимента платьев и аксессуаров, мы
                постепенно расширили коллекцию, добавив повседневную одежду,
                обувь, летние образы и стильные аксессуары. Каждая вещь
                отбирается с особым вниманием к качеству и дизайну.
              </p>
              <p>
                Сегодня SELENA — это магазин, которому доверяют тысячи
                покупательниц по всей России. Мы продолжаем развиваться и
                радовать клиенток новинками модных трендов.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center"
              alt="Магазин одежды SELENA"
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
                <h3 className="text-xl font-semibold mb-3">Стиль</h3>
                <p className="text-gray-600">
                  Отбираем только самые актуальные тренды и проверенные бренды.
                  Каждая вещь — это качество и стиль.
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
                <h3 className="text-xl font-semibold mb-3">Качество</h3>
                <p className="text-gray-600">
                  Следим за новинками моды и предлагаем актуальные образы,
                  которые делают жизнь ярче и увереннее.
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
                <h3 className="text-xl font-semibold mb-3">Комфорт</h3>
                <p className="text-gray-600">
                  Предоставляем полную гарантию на всю продукцию и стремимся
                  превзойти ожидания в сервисе и обслуживании клиентов.
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
                  src="https://images.unsplash.com/photo-1594824815933-2d0ec0ba8be5"
                  alt="Анна Стилева"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Анна Стилева</h3>
                <p className="text-gray-600">Основатель и стилист</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  alt="Мария Модова"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Мария Модова</h3>
                <p className="text-gray-600">Менеджер по закупкам</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c"
                  alt="Елена Трендова"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Елена Трендова</h3>
                <p className="text-gray-600">Консультант по стилю</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
