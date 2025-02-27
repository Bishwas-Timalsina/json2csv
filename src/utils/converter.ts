export const jsonToCsv = (items: any) => {
  items?.length;

  if (!items.length) return "";

  const header = Object.keys(items[0]);
  const headerString = header.join(",");

  const replacer = (value: any) =>
    value !== null && value !== undefined ? value : "";

  const rowItems = items.map((row: any) =>
    header
      .map((fieldName: any) => JSON.stringify(row[fieldName], replacer))
      .join(",")
  );

  const csv = [headerString, ...rowItems].join("\r\n");
  return csv;
};
