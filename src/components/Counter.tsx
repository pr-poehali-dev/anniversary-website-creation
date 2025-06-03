import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Counter = () => {
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [loveMessage, setLoveMessage] = useState(0);

  const messages = [
    "дней мурчания вместе 🐱",
    "дней сладких мяуканий 😻",
    "дней пушистой любви 🥰",
    "дней котячьего счастья 💕",
  ];

  useEffect(() => {
    const startDate = new Date("2025-05-17");

    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeData({ days, hours, minutes, seconds });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    const messageInterval = setInterval(() => {
      setLoveMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 font-montserrat">
          Мы вместе уже 💕
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8 font-open-sans animate-pulse">
          {timeData.days} {messages[loveMessage]}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-pink-100 to-rose-100 border-pink-200 hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-pointer">
            <div className="text-4xl font-bold text-rose-600 font-montserrat">
              {timeData.days}
            </div>
            <div className="text-gray-600 font-open-sans">дней 🐾</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-rose-100 to-pink-100 border-rose-200 hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-pointer">
            <div className="text-4xl font-bold text-pink-600 font-montserrat">
              {timeData.hours}
            </div>
            <div className="text-gray-600 font-open-sans">часов 😻</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-pink-100 to-red-100 border-pink-200 hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-pointer">
            <div className="text-4xl font-bold text-red-500 font-montserrat">
              {timeData.minutes}
            </div>
            <div className="text-gray-600 font-open-sans">минут 🥰</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-red-100 to-rose-100 border-red-200 hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-pointer">
            <div className="text-4xl font-bold text-rose-500 font-montserrat">
              {timeData.seconds}
            </div>
            <div className="text-gray-600 font-open-sans">секунд 💖</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Counter;
