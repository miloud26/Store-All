import ProductCard from "./ProductCard";

function ProductGrid({ products, compact }) {
  if (!products || !products.length) {
    return <p className="ui-empty">لا توجد منتجات متاحة حاليًا.</p>;
  }

  return (
    <div className={`ui-grid${compact ? " ui-grid-3" : ""}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
