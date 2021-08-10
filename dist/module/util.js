export function isRegex(item) {
  return Object.prototype.toString.call(item) === '[object RegExp]';
}
export function noop() {// eslint-disable-line @typescript-eslint/no-unused-vars
  // pass
}