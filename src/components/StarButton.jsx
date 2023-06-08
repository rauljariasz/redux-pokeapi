import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined
  return <Button icon={<Icon />} onClick={onClick} />
}

StarButton.propTypes

export default StarButton