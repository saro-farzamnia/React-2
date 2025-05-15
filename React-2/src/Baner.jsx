

const Baner = (props) => {
    const {title,description,students}=props;
  return (
    <div>
      <h1>Baner</h1>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{students}</span>
    </div>
  )
}

export default Baner

//or

// const Baner = ({title,description,students}) => {
//   return (
//     <div>
//       <h1>Baner</h1>
//       <h4>{title}</h4>
//       <p>{description}</p>
//       <span>{students}</span>
//     </div>
//   )
// }

// export default Baner