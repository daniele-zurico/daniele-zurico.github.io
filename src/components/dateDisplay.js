import React from "react"
import * as styles from "./dateDisplay.module.css"

const DateDisplay = ({ date }) => {
  const splittedDate = date.split(/[\s,]+/)
  const day = splittedDate[1]
  const month = splittedDate[0].substring(0, 3)
  const year = splittedDate[2]
  return (
    <span className={styles.container}>
      <div className={styles.date}>
        <span className={styles.day}>{day}</span>
        <strong className={styles.month}>{month}</strong>
        <span className={styles.year}> {year}</span>
      </div>
    </span>
  )
}

export default DateDisplay
