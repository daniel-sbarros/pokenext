import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'

import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }

}

export default function Home({ pokemons }) {
  return (
    <>
      <h1 className={`my-4 ${styles.title_container}`}>
        Poke<span className={styles.red}>Next</span>
        <Image src='/images/pokeball.png' alt='Pokebola' width='50px' height='50px' />
      </h1>

      <div className='d-flex flex-wrap'>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
