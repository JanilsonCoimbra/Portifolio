import SectionSobre from "./contente/SectionSobre"
import SectionHardSkill from "./contente/SectionHardSkill"
import Projetos from "./contente/Projetos"
import BlogUltimosPost from "./contente/BlogUltimosPost"
function Body(){
    return(<>
        <SectionSobre></SectionSobre>
        <SectionHardSkill></SectionHardSkill>
        <Projetos></Projetos>
        <BlogUltimosPost></BlogUltimosPost>
    </>)
}
export default Body