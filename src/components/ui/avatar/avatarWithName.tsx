import s from './avatar.module.scss'

import { Avatar } from './avatar'

type Props = {
  avatar: string
  name: string
}
export const AvatarWithName = ({ avatar, name }: Props) => {
  return (
    <div className={s.avatarWithNameWrapper}>
      <span className={s.name}>{name}</span>
      <Avatar avatar={avatar} />
    </div>
  )
}
