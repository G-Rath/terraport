export function assertDefined<T>(val: unknown, message?: string): asserts val {
  if (val === undefined) {
    throw new Error(message ?? `Unexpected undefined value`);
  }
}
