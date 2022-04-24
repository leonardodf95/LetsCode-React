// import { useUser } from "../../../context/UserContext";
import * as s from "./style";

const Skill = ({user}) => {
  
    
    console.log('skill', user)
    return (
    <s.SkillsArea>
      <s.SkillTitle>skills</s.SkillTitle>
      <s.SkillBox>
        {user.skills.map((skill) => (
          <s.Skills key={skill}>{skill}</s.Skills>
        ))}
      </s.SkillBox>
    </s.SkillsArea>
  );
};

export default Skill;
