import Baner from "./Baner"
import CourseList from "./CourseList"
import CourseListTamrin from "./CourseListTamrin"
import Event from "./Event"

function App() {
  

  return (
    <>
      <Baner title="Sohail" description="This is a Reac Course" students={4} />
      <CourseList/>
      <CourseListTamrin/>
      <Event/>
    </>
  )
}

export default App
