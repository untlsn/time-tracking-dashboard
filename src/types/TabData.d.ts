export interface TimeFrame {
  current: number,
  previous: number
}

interface TabData {
  title: string,
  icon: string,
  timeframes: Record<'daily'|'weekly'|'monthly', TimeFrame>
  color: string,
}

export default TabData;
