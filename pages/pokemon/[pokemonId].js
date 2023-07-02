import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Pokemon.module.css"

export const getStaticPaths = async() => {
    const maxPokemons = 1010
    const api = "https://pokeapi.co/api/v2/pokemon/"
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    //params
    const paths = data.results.map(
        (pokemon, index) => {
            return{
                params: {pokemonId: (index+1).toString()},
            }
        }
    )

    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return{
        props: {
            pokemon: data
        },
    }
}

export default function Pokemon({pokemon}){
    let pid

    if(pokemon.id < 10){
        pid = `00${pokemon.id}`
    }else if(pokemon.id < 100){
        pid = `0${pokemon.id}`
    }else{
        pid = `${pokemon.id}`
    }

    const conditional = () => {
        if(pokemon.id == 1){
            return(
                <>
                    <Link href={`/pokemon/1010`} legacyBehavior><a>{"<"}</a></Link>
                    <Link href={`/pokemon/${pokemon.id+1}`} legacyBehavior><a>{">"}</a></Link>
                </>
            )
        }else if(pokemon.id > 1 && pokemon.id < 1010){
            return(
                <>
                    <Link href={`/pokemon/${pokemon.id-1}`} legacyBehavior><a>{"<"}</a></Link>
                    <Link href={`/pokemon/${pokemon.id+1}`} legacyBehavior><a>{">"}</a></Link>
                </>
            )
        }else{
            return(
                <>
                    <Link href={`/pokemon/${pokemon.id-1}`} legacyBehavior><a>{"<"}</a></Link>
                    <Link href={`/pokemon/1`} legacyBehavior><a>{">"}</a></Link>
                </>
            )
        }
    }

    return(
        <>
            <div className={styles.pokemonContainer}>
                <h1 className={styles.title}>{pokemon.name}</h1>
                <Image
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pid}.png`}
                width="200"
                height="200"
                alt={pokemon.name}
                />
                <div>
                    <h3>Número:</h3>
                    <p>#{pokemon.id}</p>
                </div>

                <div>
                    <h3>Tipo:</h3>
                    <div className={styles.typesContainer}>
                        {
                            pokemon.types.map(
                                (item, index) => {
                                    return(
                                        <span key={index} className={`${styles.type} ${styles['type_'+item.type.name]}`}>{item.type.name}</span>
                                    )
                                }
                            )
                        }
                    </div>
                </div>

                <div className={styles.dataContainer}>
                    <div className={styles.dataHeight}>
                        <h4>Altura:</h4>
                        <p>{pokemon.height * 10} cm</p>
                    </div>
                    <div className={styles.dataWeight}>
                        <h4>Peso:</h4>
                        <p>{pokemon.weight / 10} kg</p>
                    </div>
                </div>

                <div className={styles.navigation}>
                    {conditional()}
                </div>
            </div>
        </>
    )
}