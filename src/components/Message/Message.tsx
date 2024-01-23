import styles from "./Message.module.css"
import { useAppSelector } from "../../store"
import { selectIsExceeds } from "../../store/stuffySlice"

function Message() {
  const isExceeds = useAppSelector(selectIsExceeds)

  return (
    <div className={`${styles.grid_item} ${isExceeds ? styles.exceed : ""}`}>
      <h2 className={styles.title}>
        Душнила {isExceeds ? "не" : ""} доволен вами
      </h2>
      <h2 className={styles.message}>
        {isExceeds ? "CO2 превышает норму" : "Все показатели в норме"}
      </h2>
    </div>
  )
}

export default Message
