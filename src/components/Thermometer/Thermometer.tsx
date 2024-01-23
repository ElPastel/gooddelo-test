import { useAppSelector } from "../../store"
import { selectIsExceeds, selectStuffy } from "../../store/stuffySlice"
import styles from "./Thermometer.module.css"

function Thermometer() {
  const stuffy = useAppSelector(selectStuffy)
  const isExceeds = useAppSelector(selectIsExceeds)

  return (
    <div className={`${styles.grid_item} ${isExceeds ? styles.exceed : ""}`}>
      <p className={styles.degree}>
        {stuffy?.temp ? Math.round(stuffy?.temp * 10) / 10 : 0} &deg;C
      </p>
      <h3 className={styles.title}>Температура</h3>
      <p className={styles.degree}>
        {stuffy?.co2 ? Math.round(stuffy?.co2) : 0} ppm
      </p>
      <h3 className={styles.title}>CO2</h3>
    </div>
  )
}

export default Thermometer
