import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { IoBookmarksOutline } from 'react-icons/io5'
import { IoBookmarks } from 'react-icons/io5'
import { SlEye } from 'react-icons/sl'

import s from './main-page.module.scss'

export const MainPage: React.FC = () => {
  const [isSave, setIsSave] = useState(() => Math.random() < 0.5) //возвращает true в с реднем в половине случаев

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Link className={s.linkOff} to={'/pet-card'}>
          <img
            alt={'cлавный котэ'}
            className={s.cardImg}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwjg5UtRge_buRXOtqzLFUOJJhyFD6lHrjQ&usqp=CAU'
            }
          />
          <div className={s.textWrap}>
            <Typography className={s.title} variant={'h1'}>
              Славный котэ
            </Typography>
            <Typography className={s.description} variant={'body1'}>
              Ищу друга на конец света. Добропорядочный котэ ищет дом, где будет гадить в тапки
              добрым людям, шутка.
            </Typography>
          </div>
        </Link>
        <Typography className={s.location}>Россия, Волгоград</Typography>
        <div className={s.dataWrap}>
          <Typography className={s.watchInfo} variant={'body1'}>
            {' '}
            <SlEye className={s.icon} size={24} />
            112{' '}
          </Typography>
          {isSave ? <IoBookmarks size={22} /> : <IoBookmarksOutline size={22} />}
        </div>
      </Card>
    </div>
  )
}
