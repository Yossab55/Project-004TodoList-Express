function env(prop) {
  return process.env[prop.toUpperCase()] || null;
}
function addDays(date, days) {
  date.setDate(date.getDate() + days);
  return date;
};
export { env, addDays };
