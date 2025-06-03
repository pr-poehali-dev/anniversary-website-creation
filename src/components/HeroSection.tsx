import { Card } from "@/components/ui/card";
import { useState } from "react";

const HeroSection = () => {
  const [clickedHearts, setClickedHearts] = useState<number[]>([]);
  const [loveQuote, setLoveQuote] = useState(0);

  const quotes = [
    "Один месяц — это только начало нашего удивительного путешествия вместе 💕",
    "Каждый день с тобой — это маленькое чудо ✨",
    "Ты мой котёнок, я твой котик — мурчим вместе 🐱💖",
    "31 день счастья, и это только начало нашей сказки 🌟",
  ];

  const handleHeartClick = (index: number) => {
    setClickedHearts((prev) => [...prev, index]);
    setTimeout(() => {
      setClickedHearts((prev) => prev.filter((i) => i !== index));
    }, 2000);
  };

  const changeQuote = () => {
    setLoveQuote((prev) => (prev + 1) % quotes.length);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`heart-float absolute text-2xl cursor-pointer pointer-events-auto transition-all duration-500 hover:scale-150 ${
              clickedHearts.includes(i)
                ? "animate-ping scale-150"
                : "animate-bounce"
            }`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 2}s`,
              color: ["#f472b6", "#ec4899", "#db2777", "#be185d"][
                Math.floor(Math.random() * 4)
              ],
            }}
            onClick={() => handleHeartClick(i)}
          >
            {
              ["💕", "💖", "❤️", "💝", "💗", "💓", "🥰", "😻"][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      <Card className="max-w-2xl mx-4 p-12 text-center bg-white/80 backdrop-blur-sm border-pink-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-montserrat animate-pulse">
            Илья 💕 Ева
          </h1>

          <div
            className="text-4xl animate-bounce cursor-pointer hover:scale-125 transition-transform"
            onClick={changeQuote}
          >
            💖
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800 font-montserrat">
              Наш первый месяц 🐱💕
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              17 мая 2025 — день, когда два сердца стали мурчать в унисон 😻
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-xl hover:from-pink-200 hover:to-rose-200 transition-all duration-300 cursor-pointer"
            onClick={changeQuote}
          >
            <p className="text-lg text-gray-700 italic font-open-sans">
              "{quotes[loveQuote]}"
            </p>
            <div className="text-xs text-gray-500 mt-2">
              💡 Нажми, чтобы сменить цитату
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HeroSection;
