import '../../App'
const Navbar = ({selectedProducts, price}) => {
    return (
        <div style={{display : 'flex', justifyContent : 'space-around'}}>
            <div>
                <div className="logo">logo</div>
            </div>
            <div className="menus">
                <li className="item">Home</li>
                <li className="item">product</li>
                <li className="item">cart {selectedProducts.length}</li>
                <li className="item">${price}</li>
            </div>
        </div>
    );
};

export default Navbar;