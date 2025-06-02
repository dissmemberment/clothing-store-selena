import React, { useState } from "react";
import { Button } from "./ui/button";
import Icon from "./ui/icon";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "платье",
      price: 3500,
      oldPrice: 4200,
      image:
        "https://i.pinimg.com/736x/66/21/2c/66212c62462a31b09a5851e362aa7c22.jpg",
      category: "Платья",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "шорты",
      price: 2200,
      image:
        "https://i.pinimg.com/736x/7c/fa/09/7cfa09360223b332db2ec170fe7aff6b.jpg",
      category: "Низ",
      isNew: false,
      isSale: false,
    },
    {
      id: 3,
      name: "футболка",
      price: 1800,
      image:
        "https://i.pinimg.com/736x/e9/22/8a/e9228a81831794befc5719e234920212.jpg",
      category: "Футболки",
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "кеды",
      price: 4500,
      oldPrice: 6000,
      image:
        "https://i.pinimg.com/736x/6c/f2/90/6cf2907194b2a595e4cfaf12fdf9efe3.jpg",
      category: "Обувь",
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "футболка",
      price: 2800,
      image:
        "https://i.pinimg.com/736x/85/f2/36/85f2361dbfb599f2d8ea500596ffa938.jpg",
      category: "Топы",
      isNew: true,
      isSale: false,
    },
    {
      id: 6,
      name: "шорты",
      price: 3200,
      image:
        "https://i.pinimg.com/736x/be/08/c7/be08c7c7160a510e973a32f528ab0804.jpg",
      category: "Низ",
      isNew: false,
      isSale: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
            Летняя коллекция
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Стильная и комфортная одежда для летнего сезона
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Показать больше товаров
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
