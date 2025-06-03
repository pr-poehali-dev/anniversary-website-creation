import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  const photos = [
    {
      placeholder:
        "https://images.unsplash.com/photo-1518621012118-1d2cc6b0bb67?w=400&h=300&fit=crop",
      title: "Наша первая встреча",
      description: "Тот самый день, 17 мая",
    },
    {
      placeholder:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop",
      title: "Первое свидание",
      description: "Незабываемый вечер",
    },
    {
      placeholder:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      title: "Наши моменты",
      description: "Каждый день особенный",
    },
    {
      placeholder:
        "https://images.unsplash.com/photo-1518299440405-7a2ea8ad8432?w=400&h=300&fit=crop",
      title: "Вместе навсегда",
      description: "И это только начало",
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
