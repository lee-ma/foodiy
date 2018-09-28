import React from "react"
import moment from "moment"
import { AvatarImage, Text } from "components"
import { generateDaysAgoText } from "utils"

const calculateDate = date => {
  const difference = moment().diff(moment(date))
  return generateDaysAgoText(difference)
}

const Comment = ({ comment, ...otherProps }) => (
  <div style={{ margin: "1em 0" }}>
    <div className="f-aic" {...otherProps}>
      <AvatarImage user={comment.user} />
      <div style={{ marginLeft: 10 }}>
        <Text semiBold>{comment.user.firstName} {comment.user.lastName}</Text>
      </div>
      <div style={{ marginLeft: 15 }}>
        <Text greyDark>{comment.rating} ★</Text>
      </div>
      <div style={{ marginLeft: 15 }}>
        <Text grey>{calculateDate(comment.createdAt)}</Text>
      </div>
    </div>
    <div>
      <Text>{comment.content}</Text>
    </div>
  </div>
)

export default Comment