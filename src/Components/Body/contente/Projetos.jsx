import Styles from './Projeto.module.css';
import logoNaBahia from'../img/logo.png';
import logoForRef from '../img/logoForref.png';

function Projetos() {
    return (<>
<h2 className={Styles.sectionUltimosArtigos}>Principais projetos</h2>
    <section className={Styles.sectionBlog}>
                <div className={Styles.sectionBlogCard}>
                    <div className={Styles.sectionBlogCardImg}><img src={logoNaBahia} alt="foto gato"></img></div>
                    <div className={Styles.sectionBlogCardRodape}>
                        <a href="https://nabahia.netlify.app/" target="_blank" rel="noopener noreferrer">LINK</a>
                    </div>
                </div>
                <div className={Styles.sectionBlogCard}>
                    <div className={Styles.sectionBlogCardImg}><img src={logoForRef} alt="foto gato"></img></div>
                    <div className={Styles.sectionBlogCardRodape}>
                        <a href="https://forrefuges.azurewebsites.net/" target="_blank" rel="noopener noreferrer">LINK</a>
                    </div>
                </div>
        </section>
    </>)
}
export default Projetos;