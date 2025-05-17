import { useState } from "react"
import GeneralInfoForm from "./components/GeneralInfoForm"
import EducationalExperienceForm from "./components/EducationalExperienceForm"
import ProfessionalExperienceForm from "./components/ProfessionalExperienceForm"
import "./App.css"

function App() {

  return (
    <>
      <div>
        <GeneralInfoForm />
        <EducationalExperienceForm />
        <ProfessionalExperienceForm />
      </div>
    </>
  )
}

export default App
