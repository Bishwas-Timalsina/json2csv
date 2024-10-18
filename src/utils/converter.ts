export const jsonToCsv = (items: any) => {
  console.log(items?.length);

  if (!items.length) return ""; // Handle empty input

  const header = Object.keys(items[0]);
  const headerString = header.join(",");

  const replacer = (key: any, value: any) =>
    value !== null && value !== undefined ? value : "";

  const rowItems = items.map((row: any) =>
    header
      .map((fieldName: any) => JSON.stringify(row[fieldName], replacer))
      .join(",")
  );

  const csv = [headerString, ...rowItems].join("\r\n");
  return csv;
};
