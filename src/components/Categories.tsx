import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Платья",
      icon: "Shirt",
      image:
        "https://i.pinimg.com/736x/75/c7/a2/75c7a29605b690fd952e2822a12dea78.jpg",
    },
    {
      id: 2,
      name: "Футболки",
      icon: "ShirtIcon",
      image:
        "https://i.pinimg.com/736x/13/75/76/137576858927057a9c5c11a42576aa64.jpg",
    },
    {
      id: 3,
      name: "Низ",
      icon: "Package",
      image:
        "https://i.pinimg.com/736x/9c/44/ae/9c44ae8c7cd9a6c63d1972ab29d9d029.jpg",
    },
    {
      id: 4,
      name: "Обувь",
      icon: "Footprints",
      image:
        "https://i.pinimg.com/736x/5a/84/9e/5a849ed21da67418f21e1aeb1a54d5a1.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
            Категории одежды
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
