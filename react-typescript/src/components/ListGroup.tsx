interface Product {
  title: string;
  isFruit: boolean;
  id: number;
}

const products: Product[] = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ListGroup() {
  return (
    <>
      <button type="button" className="btn btn-info">
        Groceries
      </button>

      <ul className="list-group">
        {products.map((product) => (
          <li className="list-group-item list-group-item-info" style={{
        color: product.isFruit ? 'magenta' : ''
      }}>
            {product.title}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
