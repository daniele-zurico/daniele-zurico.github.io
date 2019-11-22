import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import styles from "./social.module.css"
const Social = () => (
	<div className={styles.container}>
		<a href="" target="_blank" aria-label="share post on facebook">
			<FontAwesomeIcon icon={faFacebook} className={styles.icon} />
		</a>
		<a href="" target="_blank" aria-label="share post on twitter">
			<FontAwesomeIcon icon={faTwitter} className={styles.icon} />
		</a>
		<a href="" target="_blank" aria-label="share post on linkedin">
			<FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
		</a>
	</div>
)

export default Social
