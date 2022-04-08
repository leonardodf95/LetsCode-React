import * as s from './style'
import { useState } from 'react'

const MessageButton = ({ children, onclick }) => (
    <s.MessageButton onClick={onclick}>
        {children}
    </s.MessageButton>
)

const FollowButton = () => {

    const [Follow, setFollow] = useState(false)

    const toogleFollow = () => {
        setFollow(!Follow)
    }

    return (
        <s.FollowButton follow={Follow} onClick={toogleFollow}>
            {Follow ? "Following" : "Follow"}
        </s.FollowButton>
    )

}

export { MessageButton, FollowButton}