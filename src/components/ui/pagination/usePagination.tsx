//range - функция для создания массива чисел в определенном числовом диапазоне (массив страниц пагинации)
const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, index) => index + start)
}
