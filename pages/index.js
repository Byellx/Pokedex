import styles from "../styles/Home.module.css"
import Image from "next/image"
import Card from "../components/Card"

export async function getStaticProps(){
  const maxPokemons = 151
  const api = "https://pokeapi.co/api/v2/pokemon/"
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({pokemons}){
  return(
    <>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Poke<span>Dex</span></h1>
          <Image src="/images/pokeball.png" height="50" width="50" alt="Pokedex"/>
        </div>
        <ul className={styles.pokemonContainer}>
         {
          pokemons.map(
            (pokemon) => {
              return(
                <Card key={pokemon.id} pokemon={pokemon}/>
              )
            }
          )
         }
        </ul>
    </>
  )
}