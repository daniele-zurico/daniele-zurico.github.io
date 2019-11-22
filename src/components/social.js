import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import styles from "./social.module.css"
import { TwitterShareButton, FacebookShareButton, LinkedinShareButton } from "react-share"
const Social = ({ url, className, iconClass }) => {
	console.log("urrrrrl", url)
	debugger
	return (
		<div className={[styles.container, className].join(" ")}>
			<FacebookShareButton url={url}>
				<FontAwesomeIcon icon={faFacebook} className={[styles.icon, iconClass].join(" ")} />
			</FacebookShareButton>

			<TwitterShareButton url={url}>
				<FontAwesomeIcon icon={faTwitter} className={[styles.icon, iconClass].join(" ")} />
			</TwitterShareButton>

			<LinkedinShareButton url={url}>
				<FontAwesomeIcon icon={faLinkedinIn} className={[styles.icon, iconClass].join(" ")} />
			</LinkedinShareButton>
		</div>
	)
}

export default Social
