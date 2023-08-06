const removeDuplicates = (arr: unknown[]) => {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
};

export default removeDuplicates;
