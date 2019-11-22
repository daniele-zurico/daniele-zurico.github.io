import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import styles from "./social.module.css"
import { TwitterShareButton, FacebookShareButton, LinkedinShareButton } from "react-share"
const Social = ({ url, className, iconClass }) => {
	const finalUrl = window.location.href.substring(0, window.location.href.length - 1).concat(url)
	return (
		<div className={[styles.container, className].join(" ")}>
			<FacebookShareButton url={finalUrl}>
				<FontAwesomeIcon icon={faFacebook} className={[styles.icon, iconClass].join(" ")} />
			</FacebookShareButton>

			<TwitterShareButton url={finalUrl}>
				<FontAwesomeIcon icon={faTwitter} className={[styles.icon, iconClass].join(" ")} />
			</TwitterShareButton>

			<LinkedinShareButton url={finalUrl}>
				<FontAwesomeIcon icon={faLinkedinIn} className={[styles.icon, iconClass].join(" ")} />
			</LinkedinShareButton>
		</div>
	)
}

export default Social
