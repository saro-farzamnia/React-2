

// const Event = () => {
//     // const sendHandler=()=>console.log("clicked");
//     //or
//     const sendHandler=()=>{
//         console.log("clicked")
//     }
//   return (
//     <div>
//         <h1>Event</h1>
//         <button onClick={sendHandler}> send</button>
//     </div>
//   )
// }

// export default Event

//or

const Event = () => {
    
  return (
    <div>
        <h1>Event</h1>
        <button onClick={()=>console.log("clicked")}> send</button>
    </div>
  )
}

export default Event