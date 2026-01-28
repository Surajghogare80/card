import Product from "./Product";
import "./ProductTab.css";

function productTab() {
  return (
    <div className="ProductTab">
      <Product title="Samsung s24" idx={0} />
      <Product title="iPhone 15" idx={1}/>
      <Product title="Google Pixel 7" idx={2}/>
      <Product title="OnePlus 11" idx={3}/>
    </div>
  );
}

export default productTab;
