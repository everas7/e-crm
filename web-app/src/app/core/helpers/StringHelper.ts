export const formatAsPhone = (value: string) => {
  if (value?.length === 10) {
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
  }
  return value;
};

export const formatAsCedula = (value: string) => {
  if (value?.length === 11) {
    return `${value.slice(0, 3)}-${value.slice(3, 9)}-${value.slice(9, 10)}`;
  }
  return value;
};
