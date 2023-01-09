export function filmLength(length: number) {
  const h = Math.floor(length / 60);
  const m = Math.floor(length % 60);
  return h < 1 ? `${m} мин` : `${h}ч ${m}мин`;
}
