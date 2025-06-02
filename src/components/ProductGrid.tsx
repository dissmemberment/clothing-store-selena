import React, { useState } from "react";
import { Button } from "./ui/button";
import Icon from "./ui/icon";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Беспроводные наушники Premium",
      price: 8500,
      oldPrice: 12000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=600&fit=crop&crop=center",
      category: "Аудио",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Смарт-часы с GPS",
      price: 15500,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop&crop=center",
      category: "Гаджеты",
      isNew: false,
      isSale: false,
    },
    {
      id: 3,
      name: "Портативная колонка Bluetooth",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=600&fit=crop&crop=center",
      category: "Аудио",
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "Игровая мышь RGB",
      price: 2800,
      oldPrice: 3500,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=600&fit=crop&crop=center",
      category: "Компьютеры",
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Механическая клавиатура",
      price: 6500,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=600&fit=crop&crop=center",
      category: "Компьютеры",
      isNew: true,
      isSale: false,
    },
    {
      id: 6,
      name: "Внешний аккумулятор 20000mAh",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=600&fit=crop&crop=center",
      category: "Аксессуары",
      isNew: false,
      isSale: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
            Популярные товары
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Откройте для себя самые современные гаджеты и электронику
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
