export const flattenJson = (data: any, parentKey = "", separator = ".") => {
  let result: any = {};

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}${separator}${key}` : key;
      if (
        typeof data[key] === "object" &&
        data[key] !== null &&
        !Array.isArray(data[key])
      ) {
        Object.assign(result, flattenJson(data[key], newKey, separator));
      } else if (Array.isArray(data[key])) {
        data[key].forEach((item: any, index: number) => {
          Object.assign(result, flattenJson({ [`${newKey}[${index}]`]: item }));
        });
      } else {
        result[newKey] = data[key] !== undefined ? data[key] : "";
      }
    }
  }

  return result;
};
