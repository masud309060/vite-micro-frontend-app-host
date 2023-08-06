
const removeFalsyObjectProperty = (obj = {}) => {
  if (typeof obj !== "object") return {};

  let newObject = { ...obj };
  for (let name in newObject) {

    // @ts-ignore
    if (!newObject[name]) delete newObject[name];
  }
  return newObject;
};

export default removeFalsyObjectProperty;
