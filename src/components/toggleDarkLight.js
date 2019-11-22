import React from "react"
import styles from "./toggleDarkLight.module.css"
const ToggleDarkLight = ({ onChange, checked }) => {
	return (
		<div className={styles.switch}>
			<input
				type="checkbox"
				name="toggle"
				onChange={onChange}
				checked={checked}
				aria-label="toggle dark to light mode"
			/>
			<label htmlFor="toggle">
				<i className={styles.bulb}>
					<span className={styles.bulbCenter}></span>
					<span className={styles.filament1}></span>
					<span className={styles.filament2}></span>
					<span className={styles.reflections}>
						<span></span>
					</span>
					<span className={styles.sparks}>
						<i className={styles.spark1}></i>
						<i className={styles.spark2}></i>
						<i className={styles.spark3}></i>
						<i className={styles.spark4}></i>
					</span>
				</i>
			</label>
		</div>
	)
}

export default ToggleDarkLight
