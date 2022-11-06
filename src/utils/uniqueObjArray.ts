export const uniqueObjArray = (array: any, field: string) => {
  const f = new Map(array.map((film: any) => [film[field], film])).values();
  return f;
};
