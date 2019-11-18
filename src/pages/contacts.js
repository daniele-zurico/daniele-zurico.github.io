import React from "react"
import { SEO, SectionTitle } from "../components"
import { useSite } from "../hooks/useSite"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./contacts.module.css"
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
const Contacts = () => {
  const site = useSite()
  return (
    <>
      <SEO title="Contacts" site={site} />
      <SectionTitle title="Contacts" />
      <div className={styles.container}>
        <p>
          Get in touch with me if you have suggestion about a specific topic or
          same information are not correct:
        </p>
        <p className={styles.socialContainer}>
          <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
          <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
          <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
          <FontAwesomeIcon icon={faGooglePlus} className={styles.socialIcon} />
        </p>
        <p>
          Or drop me an email at{" "}
          <a
            href="mailto:daniele.zurico@gmail.com?Subject=Blog"
            target="_top"
            className={styles.link}
          >
            daniele.zurico@gmail.com
          </a>
        </p>
      </div>
    </>
  )
}

export default Contacts
