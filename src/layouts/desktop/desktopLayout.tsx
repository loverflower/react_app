
import { FC, ReactNode } from 'react'
import './desktop.scss';

 const DesktopLayout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='desktop'>
      {children}
    </div>
  )
}

export default DesktopLayout


