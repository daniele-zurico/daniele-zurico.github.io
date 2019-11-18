import React from "react"
import styles from "./sectionTitle.module.css"
const SectionTitle = ({ title }) => (
  <div className={styles.container}>
    <span>{title}</span>
  </div>
)

export default SectionTitle
