import styles from "./header.module.scss"
import LinkComp from './helpers/LinkComp'
import links from './navItems/links'

export default function Header() {

  return (
    <div className={styles.header}>
      <div className={styles.navLinks}>
        {links.map((x, index) => <LinkComp link={x} key={index}></LinkComp>
        )}
      </div>
    </div>
  )
}

