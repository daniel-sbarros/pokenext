import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Card.module.css'

export default function Card({ pokemon }) {
    return (
        <div className={styles.card_pokemon}>
            <a href={`/pokemon/${pokemon.id}`}>
                <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt="Pokemon image" />
                <h5 className="card-title">#{pokemon.id} {pokemon.name.toUpperCase()}</h5>
            </a>
        </div>
    )
}