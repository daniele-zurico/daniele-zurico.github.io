import React from "react"
import styles from "./sectionTitle.module.css"
const SectionTitle = ({ title }) => (
  <div className={styles.container}>
    <span className={styles.title}>{title}</span>
  </div>
)

export default SectionTitle
