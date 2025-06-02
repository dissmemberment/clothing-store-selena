import React, { useState } from "react";
import { Button } from "./ui/button";
import Icon from "./ui/icon";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Элегантное платье с рукавами",
      price: 4500,
      oldPrice: 6000,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      category: "Платья",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Классическая белая рубашка",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop",
      category: "Рубашки",
      isNew: false,
      isSale: false,
    },
    {
      id: 3,
      name: "Стильный жакет oversize",
      price: 7200,
      image:
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop",
      category: "Жакеты",
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "Джинсы скинни premium",
      price: 3400,
      oldPrice: 4200,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop",
      category: "Джинсы",
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Летний топ с принтом",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1564257577-4b19f6ea0de6?w=400&h=600&fit=crop",
      category: "Топы",
      isNew: true,
      isSale: false,
    },
    {
      id: 6,
      name: "Черные брюки классика",
      price: 3600,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      category: "Брюки",
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
            Откройте для себя наши самые востребованные модели одежды
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
