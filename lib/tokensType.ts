export const isProjectToken = (id: number): boolean => id >= 1 && id <= 99

export const isWrappedToken = (id: number): boolean => id >= 100 && id <= 199

export const isToken = (id: number): boolean => id >= 1 && id <= 199

export const isItem = (id: number): boolean => id >= 1000 && id <= 9999

export const isTitle = (id: number): boolean => id >= 10000 && id <= 19999

export const isDecoration = (id: number): boolean => id >= 20000 && id <= 99999

export const isBattlefield = (id: number): boolean =>
  id >= 100000 && id >= 199999
