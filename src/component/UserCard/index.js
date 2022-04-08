// import user from './user.json'
import {Container} from './styles'
import Info from './InfoArea'
import Skill from './SkillsArea'

// import { MessageButton, FollowButton } from '../Button'

const Card = () => {

    return (
        <Container>
            <Info/>
            <Skill/>
        </Container>
    )
}

export default Card