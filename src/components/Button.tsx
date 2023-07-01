import { css } from '../../styled-system/css';

const Button = () => {
  return (
    <button className={css({ fontSize: "2xl", fontWeight: 'bold', color: 'blue.400' })}>My Button</button>
  )
}

export default Button
