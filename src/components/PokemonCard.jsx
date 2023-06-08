import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch()
  const typesString = types.map((elem) => {
    return elem.type.name
  }).join(', ')

  const handleFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }

  return <Card 
    style={{width: 250}}
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StarButton isFavorite={favorite} onClick={handleFavorite} />}
  >
    <Meta description={typesString}/>
  </Card>
}

PokemonCard.propTypes

export { PokemonCard }