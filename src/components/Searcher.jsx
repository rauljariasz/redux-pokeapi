import {Input} from 'antd'
import { useDispatch } from 'react-redux'
import { setFilter } from "../slices/dataSlice";

function Searched () {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return <Input.Search placeholder='Buscar..' style={{marginBottom: 10}} onChange={handleChange} />
}

export {Searched}