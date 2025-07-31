import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface CountryCardProps {
  name: string;
  flag: React.ReactNode;
  slug: string;
}

export function CountryCard({ name, flag, slug }: CountryCardProps) {
  return (
    <Link href={`/country/${slug}`}>
      <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105" data-testid={`country-card-${slug}`}>
        <CardContent className="p-4 text-center">
          <div className="text-3xl mb-2">{flag}</div>
          <p className="text-sm font-semibold text-vlge-secondary">{name}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
