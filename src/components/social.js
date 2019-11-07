import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons"
const Social = () => {
  return (
    <div style={{ marginTop: "15px" }}>
      <FontAwesomeIcon icon={faFacebook} style={{ marginRight: "10px" }} />
      <FontAwesomeIcon icon={faTwitter} style={{ marginRight: "10px" }} />
      <FontAwesomeIcon icon={faGooglePlus} />
    </div>
  )
}

export default Social
