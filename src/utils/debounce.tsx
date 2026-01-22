/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export const debounce = (func: Function, delay: number) => {
  let timeOutId: ReturnType<typeof setTimeout> | undefined;
  return function (args: unknown) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.apply(this, [args]);
    }, delay);
  };
};
