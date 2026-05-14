export function formatPhone(number) {
  const cleaned = number.replace(/\D/g, ""); // remove spaces and symbols

  if (cleaned.length === 12 && cleaned.startsWith("91")) {
    const mobile = cleaned.slice(2);
    return `+91 ${mobile.slice(0, 3)} ${mobile.slice(3, 6)} ${mobile.slice(6)}`;
  }

  return number;
}