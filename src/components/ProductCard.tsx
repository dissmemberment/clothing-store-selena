import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  name,
  price,
  oldPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {isNew && <Badge className="bg-green-500">Новинка</Badge>}
            {isSale && <Badge className="bg-red-500">Скидка</Badge>}
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          >
            <Icon name="Heart" size={18} />
          </Button>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{category}</p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">{price} ₽</span>
              {oldPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {oldPrice} ₽
                </span>
              )}
            </div>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
