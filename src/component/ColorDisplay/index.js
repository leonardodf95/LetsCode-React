import PropTypes from 'prop-types'
import { StyledContainer } from './styles'

const ColorDisplay = ({ color, onClick, selected }) => (
  <StyledContainer color={color} onClick={onClick} selected={selected} />
)

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ColorDisplay