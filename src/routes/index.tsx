import { For } from 'solid-js';
import PersonTitle from '~/components/organisms/PersonTitle';
import TabData from '~/types/TabData';
import HoursOfType from '~/components/organisms/HoursOfType';

const fetchData = (): Promise<TabData[]> => fetch('/api/data.json')
  .then((res) => res.json())
  .catch(() => []);

function Index() {
  const [data, { refetch }] = createResource(fetchData);

  if (!data.length) {
    setTimeout(() => {
      refetch();
    }, 1000);
  }

  return (
    <main class='flex flex-col items-center bg-[#0D1323] text-white min-h-screen pt-24 px-8 font-sans'>
      <PersonTitle />
      <For each={data()}>{
        (tab) => <HoursOfType {...tab} />
      }</For>
    </main>
  );
}

export default Index;
