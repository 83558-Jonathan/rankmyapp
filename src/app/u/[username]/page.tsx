import { computeLanguageInsights, getRepos, getUser } from '@/app/lib/github';
import InsightsCharts from '@/app/components/InsightsCharts';
import RealtimeMock from '@/app/components/RealtimeMock';
import ProfileCard from '@/app/components/ProfileCard';

type Params = { params: { username: string } };

export async function generateMetadata({ params }: Params) {
  const uname = params.username;
  return { title: `Insights • ${uname}` };
}

export default async function UserPage({ params }: Params) {
  const username = decodeURIComponent(params.username);
  const [user, repos] = await Promise.all([getUser(username), getRepos(username)]);
  const { byLanguageCount, starsByLanguage } = computeLanguageInsights(repos);

  return (
    <div className="space-y-6 py-4">
      <ProfileCard user={user} />
      <InsightsCharts byLanguageCount={byLanguageCount} starsByLanguage={starsByLanguage} />
      <section>
        <h2 className="mb-3 text-lg font-semibold">Repositórios (com atualização mockada a cada 30s)</h2>
        <RealtimeMock initial={repos} />
      </section>
    </div>
  );
}
