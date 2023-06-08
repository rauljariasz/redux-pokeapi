import { useEffect } from 'react'
import { Col, Spin } from 'antd'
import { Searched } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import logo from './statics/logo.svg'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchPokemonsWithDetails } from './slices/dataSlice'

function App() {
  const pokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);
  const loading = useSelector((state) => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searched />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={pokemons} /> }
    </div>
  )
}

App.propTypes

export default App
