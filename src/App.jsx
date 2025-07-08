import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationalExperienceForm from "./components/EducationalExperienceForm";
import ProfessionalExperienceForm from "./components/ProfessionalExperienceForm";
import GeneralInfoDisplay from "./components/GeneralInfoDisplay";
import EducationalExperienceDisplay from "./components/EducationalExperienceDisplay";
import ProfessionalExperienceDisplay from "./components/ProfessionalExperienceDisplay";
import SkillsForm from "./components/SkillsForm";
import SkillsDisplay from "./components/SkillsDisplay";
import CollapsibleSection from "./components/CollapsibleSection";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    aboutMe: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: ""
  });

  const [educationalExperience, setEducationalExperience] = useState({
    schoolName: "",
    studyTitle: "",
    beginYear: "",
    graduationYear: "",
    isInProgress: false
  });

  const [educationList, setEducationList] = useState([]);

  const [professionalExperience, setProfessionalExperience] = useState({
    employer: "",
    position: "",
    beginYear: "",
    endYear: "",
    isCurrentlyEmployed: false
  });

  const [workList, setWorkList] = useState([]);

  const [skillList, setSkillList] = useState([]);

  return (
    <div className="main-layout">
      <div className="forms-column">
        <CollapsibleSection title="General Info">
          <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        </CollapsibleSection>

        <CollapsibleSection title="Education">
          <EducationalExperienceForm
            educationalExperience={educationalExperience}
            setEducationalExperience={setEducationalExperience}
            setEducationList={setEducationList}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Work">
          <ProfessionalExperienceForm
            professionalExperience={professionalExperience}
            setProfessionalExperience={setProfessionalExperience}
            setWorkList={setWorkList}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Skills">
          <SkillsForm skillList={skillList} setSkillList={setSkillList} />
        </CollapsibleSection>
      </div>

      <div className="display-column">
        <GeneralInfoDisplay generalInfo={generalInfo} />
        <EducationalExperienceDisplay educationList={educationList} />
        <ProfessionalExperienceDisplay workList={workList} />
        <SkillsDisplay skillList={skillList} />
      </div>
    </div>
  );
}

export default App;
