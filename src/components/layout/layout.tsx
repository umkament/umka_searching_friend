import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { avatar, logo } from '@/assets'
import { Avatar } from '@/components/ui/avatar'
import { AvatarWithName } from '@/components/ui/avatar/avatarWithName'
import { Button } from '@/components/ui/button'
import { DropDownItem, DropDownMenu } from '@/components/ui/dropDownMenu'
import { Header } from '@/components/ui/header'

import s from './layout.module.scss'

export const Layout = () => {
  const [userData, setUserData] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

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
              <Avatar avatar={avatar} />
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
