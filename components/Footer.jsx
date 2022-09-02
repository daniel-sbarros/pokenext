export default function Footer() {
    return (
        <>
            <footer className="container-fluid bg-dark text-white d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <p className="col-md-4 mb-0">PokeNext © 2022 Company, Inc</p>
                <p className='col-md-4 mb-0 text-center'>Next.JS App</p>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Home</a></li>
                    <li className="nav-item"><a href="/products" className="nav-link px-2 text-white">Produtos</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link px-2 text-white">Sobre nós</a></li>
                    <li className="nav-item"><a href="/contacts" className="nav-link px-2 text-white">Contatos</a></li>
                </ul>
            </footer>
        </>
    )
}
