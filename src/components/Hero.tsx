import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-beige-50 via-white to-beige-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-brown-600 uppercase text-sm font-medium tracking-widest">
                Летняя коллекция
              </p>
              <h2 className="text-6xl lg:text-7xl font-light text-brown-900 font-montserrat leading-none">
                ЛЕТО
                <span className="block font-bold">2025</span>
              </h2>
            </div>
            <p className="text-lg text-brown-600 leading-relaxed max-w-md">
              Стильная летняя одежда для активной и яркой жизни. Комфорт и
              элегантность в каждой детали на этот сезон.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brown-900 hover:bg-brown-800 text-white px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Смотреть новинки
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brown-300 text-brown-700 hover:bg-brown-50 px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                Каталог
              </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent rounded-2xl z-10"></div>
            <img
              src="https://i.pinimg.com/736x/cf/4e/f8/cf4ef879fcfbc22ebfb3c7b010d90ce1.jpg"
              alt="Summer fashion collection"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20">
              <span className="text-brown-900 font-semibold">-25%</span>
            </div>
            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className="text-sm font-medium">Новинки</p>
              <p className="text-xs opacity-80">Summer Collection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
