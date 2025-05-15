

const CardTamrin = ({data:{title,description,image,price}}) => {
  return (
    <div>
        <li>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} alt="image" />
            <span>{price}</span>
        </li>
    </div>
  )
}

export default CardTamrin
