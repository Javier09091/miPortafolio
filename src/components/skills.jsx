
import Graphic from "./graphic.jsx"
import "../styles/skills.css";
import data from "../userdata.json";

export default function Skills() {
  return (
    <div id="section_skills" >
      <h1 className="title" >Habilidades</h1>
      <div className="graphics_container">
        <div className="technical-skills">
          <Graphic skills={data.skills.technical}/>
        </div>
        <div className="soft-skills">
            <Graphic skills={data.skills.soft}/>
        </div>
      </div>
    </div>
  );
}
