import Card from "../UserCard";
import { Carousel } from "antd";
// import user from '../../user.json'
import { useUser } from "../../context/UserContext";
import { UserContainer } from "./style";

const Container = () => {
  const { user } = useUser();

  return (
    <UserContainer>
      <Carousel autoplay>
        {user.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </Carousel>
    </UserContainer>
  );
};

export default Container;
