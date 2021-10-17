export const checkColor = (val, res) => {
  if (isNaN(val)) return;
  if ((val > 80 && res === 'w') || (val < 20 && res === 'l')) return 'greenPercentage';
  if (val > 20 && val < 80) return 'yellowPercentage';
  else return 'redPercentage';
}