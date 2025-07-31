export function NewsTicker() {
  const newsItems = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <div className="bg-gradient-to-r from-vlge-primary to-vlge-secondary text-blue py-3 mt-20 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee" data-testid="news-ticker">
        <span className="text-sm font-semibold">
          {newsItems.join("")}
        </span>
      </div>
    </div>
  );
}
