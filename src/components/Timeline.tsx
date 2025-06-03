import { Card } from "@/components/ui/card";

const Timeline = () => {
  const events = [
    {
      date: "17 мая 2025",
      title: "Первый день",
      description: "День, когда всё началось 💕",
      emoji: "🌟",
    },
    {
      date: "24 мая 2025",
      title: "Первая неделя",
      description: "Семь дней счастья вместе",
      emoji: "🎉",
    },
    {
      date: "31 мая 2025",
      title: "Две недели",
      description: "Каждый день становился лучше",
      emoji: "💫",
    },
    {
      date: "17 июня 2025",
      title: "Наш первый месяц!",
      description: "Месяц любви, смеха и прекрасных моментов",
      emoji: "🎊",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-montserrat">
          Наша история
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-rose-400"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <Card className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">{event.emoji}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 font-open-sans">
                      {event.date}
                    </p>
                    <p className="text-gray-600 font-open-sans">
                      {event.description}
                    </p>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
