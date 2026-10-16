import { Link } from "react-router-dom";

function ProductCard({ product, badge }) {
  const label = product.badge || badge;

  return (
    <article className="ui-card">
      <Link
        to={`/product/${product.id}`}
        className="ui-card-media"
        aria-label={product.name}
      >
        {label ? <span className="ui-card-badge">{label}</span> : null}

        <img
          src={product.themImg}
          alt={product.name}
          width="1000"
          height="1000"
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="ui-card-body">
        {product.category ? (
          <span className="ui-card-cat">{product.category}</span>
        ) : null}

        <h3 className="ui-card-name">{product.name}</h3>

        {product.description ? (
          <p className="ui-card-desc">{product.description}</p>
        ) : null}

        <div className="ui-card-price">
          {product.hashprice ? (
            <span className="ui-old">{product.hashprice} دج</span>
          ) : null}

          <strong>
            {product.price} <small>دج</small>
          </strong>
        </div>

        <div className="ui-card-actions">
          <Link className="ui-btn" to={`/product/${product.id}`}>
            عرض المنتج
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
