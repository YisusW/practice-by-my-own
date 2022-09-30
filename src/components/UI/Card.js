import classes from './Card.module.css'

export function Card({ className, children }) {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
}

export default Card;
