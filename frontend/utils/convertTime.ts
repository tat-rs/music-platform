export function convertTime(duration: number) {

  const min = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);

  const time = `${String(min).length < 2 ? 0 : ''}${min}:${String(seconds).length < 2 ? 0 : ''}${seconds}`;
  return time;
}