import styles from "./Logo.module.css"
import logo from "../../assets/logo.png"

function Logo() {
  return (
    <div className={styles.grid_item}>
      <img className={styles.logo} src={logo} />
    </div>
  )
}

export default Logo
