export const formatCompactNumber = (number: number) => {
  if (!number) return "0";

  const units = ["", "K", "M", "B"];

  const digits = Math.abs(number).toString().length;

  const tier = Math.floor((digits - 1) / 3);

  const scale = Math.pow(10, tier * 3);

  const scaled = number / scale;

  return `${scaled.toFixed(1).replace(/\.0/, "")}${units[tier]}`;
};
