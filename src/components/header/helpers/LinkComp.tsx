import { Link, useLocation } from 'react-router-dom';
import styles from "./linkComp.module.scss"

interface ILink {
    link: {path: string, title: string}
}

const LinkComp = ({ link}: ILink) => {
  const location = useLocation()
  return (
    <Link id={link.path === location.pathname? styles.active : ""} to={link.path}>{link.title}</Link>
  );
};

export default LinkComp;