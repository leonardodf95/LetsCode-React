import user from '../user.json'
import { MessageButton, FollowButton } from '../../Button'
import * as s from './styles'

const Info = () => (
    <s.InfoArea>
        <s.Photo src={user.photo} />
        <s.Name>{user.name}</s.Name>
        <s.City>{user.city}</s.City>
        <s.Description>{user.description}</s.Description>
        <s.AreaButtons>
            <MessageButton>Message</MessageButton>
            <FollowButton/>
        </s.AreaButtons>
    </s.InfoArea>
)

export default Info