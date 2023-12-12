export function getWhereQuerySearch<T>(querySearch: string, fields: (keyof T)[]) {
  return {
    OR: fields.map((field) => ({
      [field]: {
        contains: querySearch,
        mode: 'insensitive',
      },
    })),
  };
}
