import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            О бренде Selena
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Элегантность, стиль и качество в каждой детали. Мы создаём одежду
            для современных женщин, которые ценят комфорт и красоту.
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
                Бренд Selena был основан в 2018 году с простой, но амбициозной
                целью — создавать качественную женскую одежду, которая
                подчёркивает индивидуальность и природную красоту каждой
                женщины.
              </p>
              <p>
                Начав с небольшой коллекции платьев, мы постепенно расширили
                ассортимент, добавив блузки, юбки, аксессуары и повседневную
                одежду. Каждая вещь разрабатывается с особым вниманием к деталям
                и комфорту.
              </p>
              <p>
                Сегодня Selena — это бренд, которому доверяют тысячи женщин по
                всей России. Мы продолжаем развиваться и радовать наших клиенток
                новыми коллекциями.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop&crop=center"
              alt="Ателье и товары Selena"
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
                  name="Heart"
                  size={48}
                  className="mx-auto mb-4 text-purple-600"
                />
                <h3 className="text-xl font-semibold mb-3">Качество</h3>
                <p className="text-gray-600">
                  Используем только лучшие ткани и фурнитуру. Каждое изделие
                  проходит строгий контроль качества.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Icon
                  name="Sparkles"
                  size={48}
                  className="mx-auto mb-4 text-purple-600"
                />
                <h3 className="text-xl font-semibold mb-3">Стиль</h3>
                <p className="text-gray-600">
                  Следим за модными тенденциями и создаём актуальные коллекции,
                  которые подчёркивают женственность.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-purple-600"
                />
                <h3 className="text-xl font-semibold mb-3">Забота</h3>
                <p className="text-gray-600">
                  Ценим каждого клиента и стремимся превзойти ожидания в сервисе
                  и качестве продукции.
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
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b814"
                  alt="Анна Селенова"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Анна Селенова</h3>
                <p className="text-gray-600">Основатель и главный дизайнер</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  alt="Мария Иванова"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Мария Иванова</h3>
                <p className="text-gray-600">Технолог производства</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt="Елена Петрова"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Елена Петрова</h3>
                <p className="text-gray-600">Менеджер по работе с клиентами</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
