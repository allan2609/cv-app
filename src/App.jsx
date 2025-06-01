import { useState } from "react"
import GeneralInfoForm from "./components/GeneralInfoForm"
import EducationalExperienceForm from "./components/EducationalExperienceForm"
import ProfessionalExperienceForm from "./components/ProfessionalExperienceForm"
import GeneralInfoDisplay from "./components/GeneralInfoDisplay"
import EducationalExperienceDisplay from "./components/EducationalExperienceDisplay"
import ProfessionalExperienceDisplay from "./components/ProfessionalExperienceDisplay"
import "./App.css"

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [educationalExperience, setEducationalExperience] = useState({
    schoolName: "",
    studyTitle: "",
    beginYear: "",
    graduationYear: "",
    isInProgress: ""
  })

  const [professionalExperience, setProfessionalExperience] = useState({
    employer: "",
    position: "",
    beginYear: "",
    endYear: "",
    isCurrentlyEmployed: ""
  })

  return (
    <>
      <div>
        <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <GeneralInfoDisplay generalInfo={generalInfo} />
        <EducationalExperienceForm educationalExperience={educationalExperience} setEducationalExperience={setEducationalExperience} />
        <EducationalExperienceDisplay educationalExperience={educationalExperience} />
        <ProfessionalExperienceForm professionalExperience={professionalExperience} setProfessionalExperience={setProfessionalExperience} />
        <ProfessionalExperienceDisplay professionalExperience={professionalExperience} />
      </div>
    </>
  )
}

export default App
