//добавить данные из редакс useAuthMeQuery и т д
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { avatar, logo } from '@/assets'
import { AvatarWithName } from '@/components/ui/avatar/avatarWithName'
import { Button } from '@/components/ui/button'
import { DropDownItem, DropDownMenu } from '@/components/ui/dropDownMenu'
import { Header } from '@/components/ui/header'
import { Typography } from '@/components/ui/typography'

import s from './layout.module.scss'

export const Layout = () => {
  const [userData, setUserData] = useState('1')
  const [menuOpen, setMenuOpen] = useState(false)

  const logOutHandler = () => {
    // Имитация выхода из системы
    const fakeLogout = () => new Promise(resolve => setTimeout(resolve, 1000)) // Имитация задержки на 1 секунду

    fakeLogout().then(() => {
      const notification = 'Successfully logged out'

      // Заменяем вывод уведомления на простой console.log, так как мы не имеем реальных данных о пользователе
      console.log(notification)
      //toast.success(notification, successOptions); // Вызываем уведомление (закомментировано для замены на console.log)
    })
  }
  const menuChangeHandler = (open: boolean) => {
    setMenuOpen(open)
  }

  return (
    <>
      <Header>
        <Link to={'/'}>
          <img alt={logo} src={logo} />
        </Link>
        {userData ? (
          <DropDownMenu
            aline={'end'}
            isMenuOpen={menuOpen}
            onChange={menuChangeHandler}
            trigger={<AvatarWithName avatar={avatar} name={'Umkament'} />}
          >
            <DropDownItem>
              <AvatarWithName avatar={avatar} name={'Umkament'} />
            </DropDownItem>
            <DropDownItem>
              <Typography as={Link} className={s.link} to={'/my-profile'} variant={'subtitle1'}>
                My Page
              </Typography>
            </DropDownItem>
            <DropDownItem>
              <Button as={Link} className={s.link} onClick={logOutHandler} to={'/logout'}>
                logOut
              </Button>
            </DropDownItem>
          </DropDownMenu>
        ) : (
          <Button as={Link} className={s.login} to={'/login'} variant={'primary'}>
            logIn
          </Button>
        )}
      </Header>
      <Outlet />
    </>
  )
}
