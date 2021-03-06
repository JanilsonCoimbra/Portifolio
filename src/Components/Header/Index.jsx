import Styles from './header.module.css'
import Foto from './foto.png'
function Header() {
    return (<>
        <header className={Styles.headerStyles}>
            <span className={Styles.headerParagraf}>
               
            </span>
            <img className={Styles.capaFoto} src={Foto} alt='Foto de capa' />
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