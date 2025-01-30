import './CartContainer.css'
import Cart from '../Cart/Cart'
import About from '../About/About'
const CartContainer = ({handleIsActive, isActive, selectedProducts, handleDelete}) => {
    // console.log(isActive)

    return (
        <div>
            <h1>Cart Container.jsx</h1>

            {/* toggle */}
            <div className="flex">
                <div onClick={()=> handleIsActive('cart')} className={`${isActive.cart?"btn active":"btn about"}`}>Cart</div>
                <div onClick={()=> handleIsActive('about')} className={`${isActive.cart?"btn about":"btn active"}`}>About</div>
            </div>

            {isActive.cart?<Cart handleDelete={handleDelete} selectedProducts={selectedProducts}></Cart>:<About></About>}
        </div>
    );
};

export default CartContainer;