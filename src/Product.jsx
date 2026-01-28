import './Product.css';
import Price from './Price';

function Product({title , idx}) {
let Oldprice = ["12000", "13000", "14000", "15000"];
let Newprice = ["10000", "11000", "12000", "13000"];
let Discription = [["Good "," tough"], ["Better "," battery"], ["Best "," screen"], ["Excellent "," performance"]];
    return (<div className="product" >
        <h3>{title}</h3>
        <h3>{Discription[idx]}</h3>
        <Price newPrice={Newprice[idx]} oldPrice={Oldprice[idx]} />
    </div>);
}

export default Product;