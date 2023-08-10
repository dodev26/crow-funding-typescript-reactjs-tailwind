export const _t = (id: string, ...rest: any[]): [string, ...any[]] => {
  if (!id) {
    id = '_NOT_TRANSLATED_';
  }
  return [id, ...rest];
};

