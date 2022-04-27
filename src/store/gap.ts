import { createSignal } from 'solid-js';

// eslint-disable-next-line no-shadow
export enum Gap {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
}

export const [gap, setGap] = createSignal(Gap.weekly);
