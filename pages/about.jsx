import Image from "next/image";

export default function About() {
    return (
        <>
            <h1>Sobre o Projeto</h1>
            <div className="d-flex flex-row">
                <Image src='/images/charizard.png' width='300' height='300' alt='Charizard' />
                <p className="ms-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sunt quibusdam beatae aut aliquid harum, autem distinctio magni quo molestiae veritatis corporis amet obcaecati culpa repudiandae hic temporibus? Nostrum, hic!
                </p>
            </div>
        </>
    )
}