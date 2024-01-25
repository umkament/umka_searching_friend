import { PiArrowFatLineLeftThin, PiArrowFatLineRightThin } from 'react-icons/pi'

import s from './pagination.module.scss'

export const Dots = () => {
  return <span className={s.dots}>{'...'}</span>
}

export const PageButton = ({ disable, onClick, page, selected }: PageButtonProps) => {
  //вводим переменную для выделения текущей страницы
  const activePage = selected ? s.selected : ''

  return (
    <button className={`${activePage} ${s.item}`} disabled={disable || selected} onClick={onClick}>
      {page}
    </button>
  )
}
export const PrevButton = ({ disable, onClick }: NavigationButtonsProps) => {
  return (
    <button className={s.item} disabled={disable} onClick={onClick}>
      <PiArrowFatLineLeftThin className={s.icon} />
    </button>
  )
}
export const NextButton = ({ disable, onClick }: NavigationButtonsProps) => {
  return (
    <button className={s.item} disabled={disable} onClick={onClick}>
      <PiArrowFatLineRightThin className={s.icon} />
    </button>
  )
}
export const MainPaginationButtons = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonsProps) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return (
          <PageButton key={index} onClick={() => onClick(page)} page={page} selected={isSelected} />
        )
      })}
    </>
  )
}

type NavigationButtonsProps = {
  disable?: boolean
  onClick: () => void
}
type PageButtonProps = NavigationButtonsProps & {
  page: number
  selected: boolean
}

type MainPaginationButtonsProps = {
  currentPage: number //номер текущей страницы
  onClick: (pageNumber: number) => void //передает номер страницы при клике на кнопку
  paginationRange: (number | string)[] //массив, состоящий из диапазона страниц (числа и/или многоточия)
}
