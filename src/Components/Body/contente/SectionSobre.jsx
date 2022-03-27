import Styles from './SectionSobre.module.css'
import BtnCurriculo from '../../btn/BtnCurriculo'
function SectionSobre(){
    return(<>
    <h2 className={Styles.sectionSobreTitle}>Sobre</h2>
        <section className={Styles.sectionContente} >
            <span className={Styles.sectionParagrafy} id="sobre">
                <p>Natural de Salvador-BA, Estudante de desenvolvimento de sistemas Web FullStack pela RECODE PRO, gosto muito da área tecnológica e destrinchar seus conceitos, gosto também de trabalhar com Design, trabalhei bastante ultilizando a ferramenta CorelDraw (Repositorio de arquivos corel), atualmente estou continuando a minha jornada criando experiências na area de programação, sempre fui ligado a area de tecnologia e é minha principal paixão.</p>
            </span>
            <BtnCurriculo></BtnCurriculo>
        </section>
    </>)
}
export default SectionSobre