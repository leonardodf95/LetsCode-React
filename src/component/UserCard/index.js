// import user from './user.json'
import { Container } from "./styles";

import Info from "./InfoArea";
import Skill from "./SkillsArea";


// import { MessageButton, FollowButton } from '../Button'

const Card = ({user}) => {
  
  return (
    <Container>
      <Info user={user} />
      <Skill user={user} />
    </Container>
  );
};

export default Card;
