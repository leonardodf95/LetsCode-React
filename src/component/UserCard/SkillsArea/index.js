import user from '../user.json'
import * as s from './style'

const Skill = () => (
    <s.SkillsArea>
        <s.SkillTitle>skills</s.SkillTitle>
        <s.SkillBox>
            {
            user.skills.map(skill => <s.Skills key={skill}>{skill}</s.Skills>)
            }
        </s.SkillBox>
    </s.SkillsArea>
)

export default Skill