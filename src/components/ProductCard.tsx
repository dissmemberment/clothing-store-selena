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
    <Card className="group hover:shadow-xl transition-all duration-500 cursor-pointer border-0 bg-white overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-4 left-4 flex gap-2">
            {isNew && (
              <Badge className="bg-beige-200 text-brown-800 hover:bg-beige-300 border-0">
                Новинка
              </Badge>
            )}
            {isSale && (
              <Badge className="bg-brown-900 text-white hover:bg-brown-800 border-0">
                Скидка
              </Badge>
            )}
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <Icon name="Heart" size={18} className="text-brown-700" />
          </Button>

          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              className="w-full bg-brown-900 hover:bg-brown-800 text-white transition-all duration-300"
              size="sm"
            >
              Быстрый просмотр
            </Button>
          </div>
        </div>

        <div className="p-5 bg-white">
          <p className="text-xs text-brown-500 mb-2 uppercase tracking-wider">
            {category}
          </p>
          <h3 className="font-medium text-brown-900 mb-3 line-clamp-2 leading-tight">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-brown-900">
                {price} ₽
              </span>
              {oldPrice && (
                <span className="text-sm text-brown-400 line-through">
                  {oldPrice} ₽
                </span>
              )}
            </div>
            <Button
              size="sm"
              variant="outline"
              className="border-brown-200 text-brown-700 hover:bg-brown-50 hover:border-brown-300 transition-all duration-300 hover:scale-105"
            >
              В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
