import { useEffect, useState } from "react"
import ArrowRightIcon from "../../assets/ArrowRightIcon"
import styles from "./Counter.module.css"

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const day = Math.floor(Math.random() * 366)
    setCount(day)
  }, [])

  return (
    <div className={styles.grid_item}>
      <p className={styles.counter}>Дней без душноты {count}</p>
      <button className={styles.btn}>
        История <ArrowRightIcon />
      </button>
    </div>
  )
}

export default Counter
