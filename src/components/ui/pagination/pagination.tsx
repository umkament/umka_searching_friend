import s from './pagination.module.scss'

import { MainPaginationButtons, NextButton, PrevButton } from './paginationButtons'
import { usePagination } from './usePagination'

type PaginationConditionals =
  | {
      onPerPageChang: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChang?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  className?: string
  count: number
  onChange: (page: number) => void
  onPerPageChang: (itemPerPage: number) => void //функция обратного вызова при изменении количества элементов на странице
  page: number
  perPage?: null | number // текущее количество элементов на странице
  perPageOptions?: number[] //варианты количества элементов на странице
  siblings?: number
} & PaginationConditionals
export const Pagination = ({
  className,
  count = 10,
  onChange,
  onPerPageChang,
  page = 1,
  perPage = null,
  perPageOptions,
  siblings,
}: PaginationProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({ count, onChange, page, siblings })

  //showPerPageSelect определяет, нужно ли отображать выпадающий список или нет
  const showPerPageSelect = perPage && perPageOptions && onPerPageChang

  return (
    <div className={`${s.root} ${className}`}>
      <div className={s.container}>
        <PrevButton />
        <MainPaginationButtons />
        <NextButton />
      </div>
    </div>
  )
}
