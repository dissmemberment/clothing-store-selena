import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 font-montserrat leading-tight">
              Новая коллекция
              <span className="text-purple-600 block">Весна 2025</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Откройте для себя самые стильные образы сезона. Качественная
              одежда для современных людей.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Смотреть коллекцию
              </Button>
              <Button variant="outline" size="lg">
                Каталог
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop&crop=center"
              alt="Fashion model"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
              <span className="text-purple-600 font-semibold">-30%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
