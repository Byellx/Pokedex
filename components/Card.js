import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.css"

export default function Card({pokemon}){
    let pid

    if(pokemon.id < 10){
        pid = `00${pokemon.id}`
    }else if(pokemon.id < 100){
        pid = `0${pokemon.id}`
    }else{
        pid = `${pokemon.id}`
    }

    console.log(`Id: ${pokemon.id} - Link: ${pid}`)

    return(
        <div className={styles.card}>
            <Image
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pid}.png`}
                width="120"
                height="120"
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.name}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
                <a className={styles.button}>Detalhes</a>
            </Link>
        </div>
    )
}