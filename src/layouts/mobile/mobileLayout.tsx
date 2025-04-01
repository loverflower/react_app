
import { FC, ReactNode } from 'react'
import './mobile.scss';

export const MobileLayout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='mobile'>
      {children}
    </div>
  )
}
export default MobileLayout

