import { Link } from "react-router-dom";

function HeroSection({ product }) {
  return (
    <section className="ui-hero">
      <div className="ui-hero-inner">
        <div>
          <span className="ui-eyebrow">متجر جزائري • الدفع عند الاستلام</span>

          <h1 className="ui-hero-title">
            {product ? product.name : "منتجات مختارة بعناية"}
          </h1>

          <p className="ui-hero-sub">
            {product && product.description
              ? product.description
              : "اختر منتجك، أكمل معلوماتك، وسنتصل بك لتأكيد الطلب."}
          </p>

          <div className="ui-hero-actions">
            <Link className="ui-btn" to="/products">
              تصفّح المنتجات
            </Link>

            {product ? (
              <Link className="ui-btn ui-btn-ghost" to={`/product/${product.id}`}>
                اطلب الآن
              </Link>
            ) : null}
          </div>

          <ul className="ui-hero-points">
            <li>الدفع عند الاستلام</li>
            <li>توصيل إلى 58 ولاية</li>
            <li>سنتصل بك لتأكيد الطلب</li>
          </ul>
        </div>

        {product ? (
          <div className="ui-hero-visual">
            <img
              src={product.themImg}
              alt={product.name}
              width="1000"
              height="1000"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default HeroSection;
