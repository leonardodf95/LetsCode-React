// import { Button } from "antd"
import airmax from './airmax.json'
import Product from "../Product"
// import UserCard from "../UserCard"
import { Container } from './styles'

const Main = () => (
  <Container>
    <h2>Listagem</h2>
    <Product product={airmax} />
    
  </Container>
)

export default Main