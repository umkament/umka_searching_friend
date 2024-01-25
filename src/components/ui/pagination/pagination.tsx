import { usePagination } from '@/components/ui/pagination/usePagination.tsx'

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
  onPerPageChang: (itemPerPage: number) => void
  page: number
  perPage?: null | number
  perPageOptions?: number[]
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

  return <></>
}
