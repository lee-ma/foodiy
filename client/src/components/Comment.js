import React from "react"
import { AvatarImage, Text } from "components"

const Comment = ({ comment, ...otherProps }) => (
  <div>
    <div className="f-aic" {...otherProps}>
      <AvatarImage user={comment.user} />
      <div style={{ marginLeft: 10 }}>
        <Text semiBold>{comment.user.firstName} {comment.user.lastName}</Text>
      </div>
      <div style={{ marginLeft: 15 }}>
        <Text greyDark>{comment.rating} ★</Text>
      </div>
    </div>
    <div>
      <Text>{comment.content}</Text>
    </div>
  </div>
)

export default Comment