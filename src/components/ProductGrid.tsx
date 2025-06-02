import React, { useState } from "react";
import { Button } from "./ui/button";
import Icon from "./ui/icon";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Белое платье",
      price: 3500,
      oldPrice: 4200,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop&crop=center",
      category: "Платья",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Новое название шорт",
      price: 2200,
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop&crop=center",
      category: "Низ",
      isNew: false,
      isSale: false,
    },
    {
      id: 3,
      name: "Новое название футболки",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop&crop=center",
      category: "Топы",
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "Кожаные сандалии",
      price: 4500,
      oldPrice: 6000,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=600&fit=crop&crop=center",
      category: "Обувь",
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Летний топ с открытыми плечами",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center",
      category: "Топы",
      isNew: true,
      isSale: false,
    },
    {
      id: 6,
      name: "Джинсовые шорты high waist",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop&crop=center",
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
            Стильная и комфортная одежда для жаркого сезона
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
