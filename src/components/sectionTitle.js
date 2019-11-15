import React from "react"
import styles from "./sectionTitle.module.css"
const SectionTitle = ({ title }) => (
  <div className={styles.sectionContainer}>
    <span className={styles.sectionTitle}>{title}</span>
  </div>
)

export default SectionTitle
