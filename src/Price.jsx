import './Price.css';
export default function Price({ newPrice, oldPrice }) {
  let oldPriceStyle = {
    textDecoration: "line-through",
    color: "red",
  };
  let newPriceStyle = {
    fontWeight: "bold",
    color: "limegreen",
  };
  newPrice = <span style={newPriceStyle}>{newPrice}</span>;
  oldPrice = <span style={oldPriceStyle}>{oldPrice}</span>;
  return (
    <div className="price">
      <span>{oldPrice}</span>
      &nbsp;&nbsp;
      <span>{newPrice}</span>
    </div>
  );
}
