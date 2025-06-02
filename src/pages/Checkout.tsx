import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    delivery: "courier",
    payment: "card",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Форма заказа */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="ShoppingBag" size={24} />
                Оформление заказа
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Данные покупателя</h3>
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес доставки *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Способ доставки</h3>
                  <RadioGroup
                    value={formData.delivery}
                    onValueChange={(value) =>
                      setFormData({ ...formData, delivery: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="courier" id="courier" />
                      <Label htmlFor="courier">Курьер (300₽)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Пункт выдачи (200₽)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Способ оплаты</h3>
                  <RadioGroup
                    value={formData.payment}
                    onValueChange={(value) =>
                      setFormData({ ...formData, payment: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Банковская карта</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="transfer" id="transfer" />
                      <Label htmlFor="transfer">Банковский перевод</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Наличные при получении</Label>
                    </div>
                  </RadioGroup>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Сводка заказа */}
          <Card>
            <CardHeader>
              <CardTitle>Сводка заказа</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Товары (3 шт.)</span>
                  <span>8 500₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>
                    {formData.delivery === "courier" ? "300₽" : "200₽"}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Итого</span>
                  <span>
                    {formData.delivery === "courier" ? "8 800₽" : "8 700₽"}
                  </span>
                </div>
              </div>
              <Button onClick={handleSubmit} className="w-full" size="lg">
                Оплатить заказ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
