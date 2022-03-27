import Styles from './SectionHardSkill.module.css'
import {ReactComponent  as Img} from '../img/undrawreact.svg'
import {ReactComponent as ImgServer} from '../img/undrawserver.svg'
import {ReactComponent as ImgDB} from '../img/undrawmaintenance.svg'
function SectionHardSkill() {
    return (<>
    <h2 className={Styles.titlehedskill}>Tecnologias</h2>
        <section className={Styles.hardSkill} id="hardskills">
            <article className={Styles.hardSkillArticle}>
                <ImgServer/>
                <h2>BackEnd</h2>
                <ul>
                    <li>Java SpringBoot</li>
                    <li>.Net Core / Framework</li>
                    <li>Entity Framwork (Java/.Net)</li>
                    <li>API REST</li>
                </ul>
            </article>
            <article className={Styles.hardSkillArticle}>
                <Img/>
                <h2>FrontEnd</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>React Native</li>
                    <li>BootStrap</li>
                    <li>Material Io</li>
                </ul>
            </article>
            <article className={Styles.hardSkillArticle}>
                <ImgDB/>
                <h2>Banco de Dados</h2>
                <ul>
                    <li>MySql</li>
                    <li>Postgrees</li>
                    <li>SQL Server</li>
                    <li>Mongo DB</li>
                </ul>
            </article>
        </section>
    </>)
}
export default SectionHardSkill