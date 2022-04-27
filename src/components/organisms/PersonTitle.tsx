import { For } from 'solid-js';
import imageJeremy from '~/assets/images/image-jeremy.png';
import { Gap, gap, setGap } from '~/store/gap';

const buttonTexts = ['daily', 'weekly', 'monthly'];

function PersonTitle() {
  return (
    <article class="w-full rounded-2xl bg-[#1D204B]">
      <div class="flex bg-[#5746EA] rounded-2xl p-10 gap-4">
        <img src={imageJeremy} alt="jeremy" class="border-white border-2 rounded-full h-16" />
        <div>
          <p class="opacity-70">Report for</p>
          <h2 class="text-2xl">Jeremy Robson</h2>
        </div>
      </div>
      <div class="py-8 px-12 flex justify-between text-xl">
        <For each={buttonTexts}>{
          (btn) => (
            <button
              class={`transition-opacity hocus:opacity-80 capitalize ${gap() == Gap[btn] ? 'opacity-100' : 'opacity-40'}`}
              onClick={() => setGap(Gap[btn])}
            >
              {btn}
            </button>
          )
        }</For>
      </div>
    </article>
  );
}

export default PersonTitle;
