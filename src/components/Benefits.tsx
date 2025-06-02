import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: "Truck",
      title: "Бесплатная доставка",
      description: "При заказе от 3000 рублей доставка по России бесплатно",
    },
    {
      id: 2,
      icon: "RotateCcw",
      title: "Легкий возврат",
      description: "30 дней на возврат товара без объяснения причин",
    },
    {
      id: 3,
      icon: "Crown",
      title: "Эксклюзивные модели",
      description: "Уникальные дизайны, которых нет в других магазинах",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Icon
                    name={benefit.icon}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
