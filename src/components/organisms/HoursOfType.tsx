import TabData from '~/types/TabData';
import Ellipsis from '~/assets/images/icon-ellipsis.svg';
import { gap } from '~/store/gap';

interface HoursOfTypeProps extends TabData {}

function HoursOfType(props: HoursOfTypeProps) {
  const times = createMemo(() => props.timeframes[gap()]);

  return (
    <article class="min-w-100 pt-10 mt-8 rounded-xl relative overflow-hidden" style={{ 'background-color': props.color }}>
      <img src={props.icon} alt={`${props.title} icon`} class="absolute -top-2 right-6" />
      <div class="relative grid grid-cols-2 grid-rows-2 items-center bg-[#1D204B] rounded-xl px-8 pt-6 pb-8 text-lg">
        <header class="text-2xl">{props.title}</header>
        <Ellipsis class="justify-self-end" />
        <p class="text-4xl">{times().current}hrs</p>
        <p class="justify-self-end opacity-70">last week - {times().previous}hrs</p>
      </div>
    </article>
  );
}

export default HoursOfType;
