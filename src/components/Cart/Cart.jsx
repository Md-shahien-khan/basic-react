
const Cart = ({selectedProducts, handleDelete}) => {
    console.log(selectedProducts);
    return (
        <div>
            {
                selectedProducts.map((pro)=> 
                <div key={pro.id}>
                    <div className="flex">
                        <p>{pro.name}</p>
                        <p>{pro.price}</p>
                        <button onClick={()=>handleDelete(pro.id)}>Delete</button>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Cart;