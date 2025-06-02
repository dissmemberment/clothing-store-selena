import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const orders = [
    { id: "001", date: "15.05.2024", status: "Доставлен", total: "4 200₽" },
    { id: "002", date: "28.04.2024", status: "В пути", total: "6 800₽" },
    { id: "003", date: "12.04.2024", status: "Доставлен", total: "3 150₽" },
  ];

  const favorites = [
    {
      name: "Платье летнее",
      price: "2 500₽",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    },
    {
      name: "Блузка шёлковая",
      price: "3 200₽",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Icon name="User" size={32} />
          Личный кабинет
        </h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
            <TabsTrigger value="subscriptions">Подписки</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Личные данные</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullname">Полное имя</Label>
                    <Input id="fullname" defaultValue="Анна Иванова" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" defaultValue="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="anna@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthdate">Дата рождения</Label>
                    <Input
                      id="birthdate"
                      type="date"
                      defaultValue="1990-03-15"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Адрес доставки</Label>
                  <Input
                    id="address"
                    defaultValue="г. Москва, ул. Примерная, 123, кв. 45"
                  />
                </div>
                <Button>Сохранить изменения</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>История заказов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex justify-between items-center p-4 border rounded-lg"
                    >
                      <div>
                        <div className="font-semibold">Заказ #{order.id}</div>
                        <div className="text-sm text-gray-600">
                          {order.date}
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-sm px-2 py-1 rounded ${
                            order.status === "Доставлен"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order.status}
                        </div>
                      </div>
                      <div className="font-semibold">{order.total}</div>
                      <Button variant="outline" size="sm">
                        Подробнее
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Избранные товары</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {favorites.map((item, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-lg font-bold text-purple-600">
                          {item.price}
                        </p>
                        <Button size="sm" className="mt-2">
                          В корзину
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscriptions">
            <Card>
              <CardHeader>
                <CardTitle>Управление подписками</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Новости и акции</h3>
                    <p className="text-sm text-gray-600">
                      Получайте информацию о скидках и новинках
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Персональные рекомендации</h3>
                    <p className="text-sm text-gray-600">
                      Подборки товаров специально для вас
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">SMS-уведомления</h3>
                    <p className="text-sm text-gray-600">
                      Статус заказа и важная информация
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
