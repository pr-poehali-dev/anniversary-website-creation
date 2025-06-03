import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  const photos = [
    {
      placeholder:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
      title: "Наша первая встреча",
      description: "Как два котёнка нашли друг друга 🐱💕",
    },
    {
      placeholder:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=300&fit=crop",
      title: "Первое свидание",
      description: "Мурчали от счастья весь вечер 🥰",
    },
    {
      placeholder:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=300&fit=crop",
      title: "Наши моменты",
      description: "Каждый день мяукаем от любви 💖",
    },
    {
      placeholder:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
      title: "Вместе навсегда",
      description: "Мой котик и я — пушистая любовь 🐾",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 font-montserrat">
          Наши воспоминания
        </h2>
        <p className="text-center text-gray-600 mb-12 font-open-sans">
          Каждая фотография рассказывает нашу историю
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border-pink-100"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={photo.placeholder}
                  alt={photo.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">
                  {photo.title}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {photo.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200">
            <p className="text-lg text-gray-700 font-open-sans italic">
              "Месяц прошел, как один день, но каждая минута была прекрасна" 💕
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
