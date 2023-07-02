import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About(){
    return(
        <>
            <div className={styles.about}>
                <h1>Sobre</h1>
                <p>
                Bem-vindo à Pokédex Online! Aqui você encontrará informações completas sobre todos os Pokémon conhecidos. Explore a vasta coleção de espécies, desde os clássicos até os mais recentes. Descubra habilidades, tipos, estatísticas e evoluções de cada Pokémon. Nosso objetivo é fornecer uma plataforma fácil de usar e repleta de dados precisos para satisfazer sua curiosidade e ajudá-lo a se tornar um verdadeiro Mestre Pokémon. Vamos embarcar nesta jornada emocionante juntos e desvendar todos os segredos do mundo dos Pokémon!
                </p>
                <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
            </div>
        </>
    )
}