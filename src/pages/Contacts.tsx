import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message sent");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Контакты</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Контактная информация */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Как с нами связаться</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-purple-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold">Адрес</h3>
                    <p className="text-gray-600">
                      г. Новосибирск, ул. Ленина, 12
                      <br />
                      ТЦ "Сибирский Молл", 2 этаж
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-purple-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold">Телефон</h3>
                    <p className="text-gray-600">
                      +7 (993) 935-59-45
                      <br />
                      +7 (800) 555-01-23 (бесплатно)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon
                    name="Mail"
                    size={24}
                    className="text-purple-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      vladislavonecare@gmail.com
                      <br />
                      support@selena-fashion.ru
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon
                    name="Clock"
                    size={24}
                    className="text-purple-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold">Режим работы</h3>
                    <p className="text-gray-600">
                      Пн-Пт: 10:00 - 21:00
                      <br />
                      Сб-Вс: 10:00 - 20:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Социальные сети */}
            <Card>
              <CardHeader>
                <CardTitle>Мы в социальных сетях</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Icon
                      name="Instagram"
                      size={24}
                      className="text-pink-600"
                    />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Icon name="Facebook" size={24} className="text-blue-600" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Icon name="Send" size={24} className="text-blue-500" />
                    <span>Telegram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Icon
                      name="MessageCircle"
                      size={24}
                      className="text-green-600"
                    />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Карта */}
            <Card>
              <CardHeader>
                <CardTitle>Наш офис на карте</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                    <p>Интерактивная карта</p>
                    <p className="text-sm">г. Новосибирск, ул. Ленина, 12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Форма обратной связи */}
          <Card>
            <CardHeader>
              <CardTitle>Напишите нам</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div>
                  <Label htmlFor="subject">Тема обращения</Label>
                  <Input id="subject" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Расскажите, чем мы можем помочь..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить сообщение
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <Icon name="Clock" size={16} className="inline mr-2" />
                  Мы отвечаем на сообщения в течение 24 часов в рабочие дни.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
