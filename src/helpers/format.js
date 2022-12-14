export function formatPrice(amount, currency, language) {
  const formatter = new Intl.NumberFormat(language, {
    style: "currency",
    currency,
  });

  return formatter.format(amount);
}
