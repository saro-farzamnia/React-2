

const Card = ({data:{title,discription}}) => {
  return (
    <div>
        <li>
            <h4>{title}</h4>
            <p>{discription}</p>
          </li>
    </div>
  )
}

export default Card
