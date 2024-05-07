export function dateFormat(date) {
  const d = new Date(date);
  const options = {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Iran",
  };
  const formated = new Intl.DateTimeFormat("en-US", options).format(d);

  return formated;
}
