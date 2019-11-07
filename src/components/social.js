import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons"
import styles from "./social.module.css"
const Social = () => (
  <div className={styles.container}>
    <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
    <FontAwesomeIcon icon={faGooglePlus} className={styles.icon} />
  </div>
)

export default Social
