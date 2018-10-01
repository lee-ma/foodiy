import React from "react"
import moment from "moment"
import { AvatarImage, Text } from "components"

const calculateDate = date => {
  if (moment(date).fromNow() === "a few seconds ago") {
    return "<1 minute ago"
  }
  return moment(date).fromNow()
}

const Comment = ({ comment, ...otherProps }) => (
  <div style={{ margin: "2em 0" }}>
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
    <div style={{ marginLeft: 42 }}>
      <Text>{comment.content}</Text>
    </div>
  </div>
)

export default Comment