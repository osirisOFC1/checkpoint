import produit from "./produit"
const Product = () => {
  console.log("produit",produit)
  return (
    <div>
     <h1>
     {produit.name} 
      </h1> 
    <h2>
    {produit.price}
    </h2>
<h3>
  {produit.description}
</h3>
      <img src={produit.Image} alt="coffee"/>
    </div>
  )
}

export default Product