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
  })

  const [educationList, setEducationList] = useState([]);

  const [professionalExperience, setProfessionalExperience] = useState({
    employer: "",
    position: "",
    beginYear: "",
    endYear: "",
    isCurrentlyEmployed: false
  })

  const [workList, setWorkList] = useState([]);

  return (
    <>
      <div>
        <GeneralInfoForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <GeneralInfoDisplay generalInfo={generalInfo} />

        <EducationalExperienceForm
          educationalExperience={educationalExperience}
          setEducationalExperience={setEducationalExperience}
          setEducationList={setEducationList}
        />
        <EducationalExperienceDisplay educationList={educationList} />

        <ProfessionalExperienceForm
          professionalExperience={professionalExperience}
          setProfessionalExperience={setProfessionalExperience}
          setWorkList={setWorkList}
        />
        <ProfessionalExperienceDisplay workList={workList} />
      </div>
    </>
  )
}

export default App
