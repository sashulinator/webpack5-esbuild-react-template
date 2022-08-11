// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function debounce<F extends (...params: any[]) => void>(fn: F, delay: number) {
  let timeoutID: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay)
  } as F
}
