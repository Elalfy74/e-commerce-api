export function getWhereQuerySearch<T>(querySearch: string | undefined, fields: (keyof T)[]) {
  if (!querySearch || fields.length === 0) {
    return {};
  }

  // If there is only one field to search, we can use a simple contains query
  if (fields.length === 1) {
    return {
      [fields[0]]: {
        contains: querySearch,
        mode: 'insensitive',
      },
    };
  }

  return {
    OR: fields.map((field) => ({
      [field]: {
        contains: querySearch,
        mode: 'insensitive',
      },
    })),
  };
}
