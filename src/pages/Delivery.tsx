import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Доставка и оплата
        </h1>

        <Tabs defaultValue="delivery" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
            <TabsTrigger value="payment">Оплата</TabsTrigger>
            <TabsTrigger value="returns">Возврат</TabsTrigger>
          </TabsList>

          <TabsContent value="delivery">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" size={24} />
                    Способы доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon
                          name="MapPin"
                          size={20}
                          className="text-purple-600"
                        />
                        <h3 className="font-semibold">Курьерская доставка</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• По Москве и МО — 300₽</li>
                        <li>• По регионам — от 400₽</li>
                        <li>• Срок: 1-3 рабочих дня</li>
                        <li>• Время: с 10:00 до 22:00</li>
                        <li>• Бесплатно от 5000₽</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon
                          name="Package"
                          size={20}
                          className="text-purple-600"
                        />
                        <h3 className="font-semibold">Пункт выдачи</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• СДЭК, Boxberry — 200₽</li>
                        <li>• Постамат — 150₽</li>
                        <li>• Срок: 2-5 рабочих дней</li>
                        <li>• Хранение: 5 дней</li>
                        <li>• Бесплатно от 3000₽</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Экспресс-доставка</h4>
                    <p className="text-sm text-gray-600">
                      По Москве в течение 3 часов — 800₽. Доступна для заказов
                      до 18:00.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Тарифы по регионам</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Регион</th>
                          <th className="text-left py-2">Курьер</th>
                          <th className="text-left py-2">Пункт выдачи</th>
                          <th className="text-left py-2">Срок</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">Санкт-Петербург</td>
                          <td className="py-2">350₽</td>
                          <td className="py-2">250₽</td>
                          <td className="py-2">2-3 дня</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Регионы РФ</td>
                          <td className="py-2">400-800₽</td>
                          <td className="py-2">300-600₽</td>
                          <td className="py-2">3-7 дней</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" size={24} />
                  Способы оплаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Онлайн-оплата</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border rounded">
                        <Icon
                          name="CreditCard"
                          size={20}
                          className="text-blue-600"
                        />
                        <span>Банковские карты (Visa, MasterCard, МИР)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded">
                        <Icon
                          name="Smartphone"
                          size={20}
                          className="text-green-600"
                        />
                        <span>СБП (Система быстрых платежей)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded">
                        <Icon
                          name="Wallet"
                          size={20}
                          className="text-purple-600"
                        />
                        <span>Электронные кошельки</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Другие способы</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border rounded">
                        <Icon
                          name="Banknote"
                          size={20}
                          className="text-orange-600"
                        />
                        <span>Наличные при получении</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded">
                        <Icon
                          name="Building"
                          size={20}
                          className="text-gray-600"
                        />
                        <span>Банковский перевод</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded">
                        <Icon
                          name="QrCode"
                          size={20}
                          className="text-indigo-600"
                        />
                        <span>QR-код для оплаты</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <Icon name="Shield" size={16} className="inline mr-2" />
                    Все платежи проходят через защищённое соединение. Мы не
                    храним данные ваших банковских карт.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="returns">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="RotateCcw" size={24} />
                  Возврат и обмен
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Условия возврата</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Срок возврата — 14 дней с момента получения</li>
                    <li>• Товар должен быть в первоначальном виде с бирками</li>
                    <li>• Нижнее бельё и купальники возврату не подлежат</li>
                    <li>
                      • Возврат денежных средств в течение 10 рабочих дней
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Как оформить возврат</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-sm flex items-center justify-center flex-shrink-0">
                          1
                        </div>
                        <p className="text-sm">
                          Свяжитесь с нами по телефону или email
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-sm flex items-center justify-center flex-shrink-0">
                          2
                        </div>
                        <p className="text-sm">
                          Укажите номер заказа и причину возврата
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-sm flex items-center justify-center flex-shrink-0">
                          3
                        </div>
                        <p className="text-sm">
                          Отправьте товар курьером или принесите в офис
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-sm flex items-center justify-center flex-shrink-0">
                          4
                        </div>
                        <p className="text-sm">
                          Получите возврат денежных средств
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">
                    Обмен товара
                  </h4>
                  <p className="text-sm text-green-700">
                    Если размер не подошёл, мы можем обменять товар бесплатно в
                    течение 7 дней. Обмен возможен только на товар такой же или
                    большей стоимости.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Delivery;
