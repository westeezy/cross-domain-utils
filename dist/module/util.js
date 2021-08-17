export function isRegex(item) {
  return Object.prototype.toString.call(item) === '[object RegExp]';
} // eslint-disable-next-line @typescript-eslint/no-unused-vars

export function noop() {// pass
}