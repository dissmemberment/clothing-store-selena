import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Аудио",
      icon: "Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      name: "Компьютеры",
      icon: "Monitor",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 3,
      name: "Гаджеты",
      icon: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 4,
      name: "Аксессуары",
      icon: "Cable",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&crop=center",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
            Категории товаров
          </h2>
          <p className="text-gray-600">
            Выберите категорию для поиска идеального образа
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon
                      name={category.icon}
                      size={16}
                      className="text-purple-600"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
