import Card from "./Card";


const CourseList = () => {
    const courses=[{id:1,title:"Javascript",discription:"This is a Javascript Course"},{id:2,title:"React",discription:"This is a React Course"},{id:3,title:"Next",discription:"This is a Next Course"}];
  return (
    <div>
        <h1>CoutseList</h1> 
        <ul>
            {
              courses.map((i)=><Card key={i.id} data={i}/> )
            }
        </ul>
    </div>
  )
}

export default CourseList
