/**
 * The score counts tokens burned, in thousands. Shown as "16K", and once it
 * passes a million as "1.25M", "12.5M", "125M".
 */
export function formatTokens(thousands: number): string {
  const k = Math.floor(thousands);
  if (k < 1000) return `${k}K`;
  const millions = k / 1000;
  // Truncate rather than round, so 9,999K shows as 9.99M, not 10.00M.
  const truncate = (digits: number) => (Math.floor(millions * 10 ** digits) / 10 ** digits).toFixed(digits);
  if (millions < 10) return `${truncate(2)}M`;
  if (millions < 100) return `${truncate(1)}M`;
  return `${Math.floor(millions)}M`;
}
