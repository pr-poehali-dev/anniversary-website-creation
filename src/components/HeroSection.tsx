import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="heart-float absolute top-20 left-10 text-pink-300 text-2xl animate-bounce">
          💕
        </div>
        <div className="heart-float absolute top-32 right-20 text-rose-300 text-xl animate-pulse">
          💖
        </div>
        <div className="heart-float absolute bottom-40 left-20 text-pink-400 text-3xl animate-bounce">
          ❤️
        </div>
        <div className="heart-float absolute bottom-20 right-10 text-rose-400 text-xl animate-pulse">
          💝
        </div>
        <div className="heart-float absolute top-1/2 left-1/4 text-pink-300 text-lg animate-bounce">
          💗
        </div>
        <div className="heart-float absolute top-1/3 right-1/3 text-rose-300 text-2xl animate-pulse">
          💓
        </div>
      </div>

      <Card className="max-w-2xl mx-4 p-12 text-center bg-white/80 backdrop-blur-sm border-pink-200 shadow-2xl">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-montserrat">
            Илья 💕 Ева
          </h1>

          <div className="text-4xl animate-pulse">💖</div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800 font-montserrat">
              Наш первый месяц
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              17 мая 2025 — день, когда началась наша прекрасная история
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-xl">
            <p className="text-lg text-gray-700 italic font-open-sans">
              "Один месяц — это только начало нашего удивительного путешествия
              вместе"
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HeroSection;
