export function convertTimestampToDate(timestamp?: string): string {
  if (typeof timestamp === 'undefined') {
    return new Date().toISOString();
  }
  return timestampToDate(Number(timestamp));
}

export function timestampToDate(timestamp: number): string {
  try {
    const date = new Date(timestamp);
    return date.toISOString();
  } catch (e) {
    return 'Invalid Date';
  }
}

export function convertDateToTimestamp(dateString?: string): number {
  if (typeof dateString === 'undefined') {
    return Date.now();
  }
  return dateToTimestamp(dateString);
}

export function dateToTimestamp(dateString: string): number {
  try {
    const date = new Date(dateString);
    return date.getTime();
  } catch (e) {
    return NaN;
  }
}
