import React from "react"
import * as styles from "./sectionTitle.module.css"
const SectionTitle = ({ title, left }) => (
	<div className={left ? styles.leftSectionContainer : styles.sectionContainer}>
		<span>{title}</span>
	</div>
)

export default SectionTitle
