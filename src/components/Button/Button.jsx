import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, variant }) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Button;
