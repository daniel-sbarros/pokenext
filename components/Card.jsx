import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Card.module.css'

export default function Card({ pokemon }) {
    return (
        <div className={`card m-1 ${styles.card_pokemon}`}>
            <img className="card-img-top w-50 h-100 mx-auto"
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt="Pokemon image"
            />
            <div className="card-body">
                <h5 className="card-title">
                    <a href={`/pokemon/${pokemon.id}`} >
                        #{pokemon.id} {pokemon.name.toUpperCase()}
                    </a>
                </h5>
            </div>
        </div>
    )
}