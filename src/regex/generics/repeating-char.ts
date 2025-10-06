export const repeatingChars = (maxConsecutive: number) =>
    new RegExp(`(.)\\1{${maxConsecutive - 1},}`)