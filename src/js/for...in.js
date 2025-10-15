export function orderByProps(obj, sortedProps) {
  const sortedPart = [];
  const remainPart = [];
  const result = [];

  for (const prop of sortedProps) { 
    if (obj.hasOwnProperty(prop)) { 
      sortedPart.push(prop);
    }
  }

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && !sortedPart.includes(prop)) {
      remainPart.push(prop);
    }
  }

  remainPart.sort();

  const finalSort = [...sortedPart, ...remainPart];

  for (const key of finalSort) { 
    result.push({ key: key, value: obj[key] });
  }

  return result;
}