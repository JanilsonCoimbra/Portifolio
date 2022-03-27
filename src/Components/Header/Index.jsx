import Styles from './header.module.css'

function Header() {
    return (<>
        <header className={Styles.headerStyles}>
            <span className={Styles.headerParagraf}>
                <p>Que tamanho tem o universo?<br />
                    O universo tem o tamanho do seu mundo.
                    Que tamanho tem o meu mundo?
                    Tem o tamanho dos seus sonhos.</p>
            </span>
        </header>
        <section className={Styles.cardPefil} data-navanimate>
            <div className={Styles.cardPerfilFoto}></div>
            <div className={Styles.cardContente}>
                <h1>Janilson Coimbra</h1>
                <h2>FullSatck Developer</h2>
                <div>
                    Linkedin
                    GitHub
                </div>
            </div>
            <nav className={Styles.cardNav} >
                <ol className={Styles.cardNavOl}>
                    <li><a href='#sobre'>Sobre</a></li>
                    <li>Blog</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li id="sobre"><a href='#hardskills'>HardSkills</a></li>
                </ol>
            </nav>
        </section>
    </>)
}
export default Header