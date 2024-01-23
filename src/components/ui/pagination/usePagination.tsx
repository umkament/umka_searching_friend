//range - функция для создания массива чисел в определенном числовом диапазоне (массив страниц пагинации)
import { useMemo } from 'react'

const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, index) => index + start)
}
//многоточие для пагинации
const DOTS = '...'

type UsePaginationProps = {
  count: number
  onChange: (pageNumber: number) => void
  page: number
  siblings?: number
}
type PaginationRangeType = ('...' | number)[]
export const usePagination = ({
  count = 1,
  onChange,
  page = 1,
  siblings = 1,
}: UsePaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblings + 5

    // 1
    if (totalPageNumbers >= count) {
      return range(1, count)
    }
    const firstPageIndex = 1
    const lastPageIndex = count

    // отображаем диапазон страниц, которые должны быть видимы вокруг текущей страницы
    const leftSibLingCount = Math.max(page - siblings, 1)
    const rightSibLingCount = Math.min(page + siblings, count)

    //когда необходимо отображать левое и правое многоточие
    const shouldShowLeftDots = leftSibLingCount > 2
    const shouldShowRightDots = rightSibLingCount < count - 2
  }, [siblings, page, count])
}
