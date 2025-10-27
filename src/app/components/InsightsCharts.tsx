'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

type Props = {
  byLanguageCount: Record<string, number>;
  starsByLanguage: Record<string, number>;
};

export default function InsightsCharts({ byLanguageCount, starsByLanguage }: Props) {
  const countData = Object.entries(byLanguageCount).map(([lang, count]) => ({ lang, count }));
  const starData = Object.entries(starsByLanguage).map(([lang, stars]) => ({ lang, stars }));

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="h-72 rounded-lg border p-4 dark:border-gray-700">
        <h3 className="mb-3 font-semibold">Linguagens mais usadas (por quantidade)</h3>
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie data={countData} dataKey="count" nameKey="lang" outerRadius={90} label />
            {countData.map((_, i) => (
              <Cell key={i} />
            ))}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="h-72 rounded-lg border p-4 dark:border-gray-700">
        <h3 className="mb-3 font-semibold">Total de estrelas por linguagem</h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={starData}>
            <XAxis dataKey="lang" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stars" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
