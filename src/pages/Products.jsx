import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "../data";
import { categoryOf, getCategories } from "../productUtils";
import ProductGrid from "../components/ProductGrid";
import CTASection from "../components/CTASection";

function Products() {
  const products = data.filter((product) => product.id);
  const categories = getCategories(products);
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("category") || "";
  const visible = active
    ? products.filter((product) => categoryOf(product) === active)
    : products;

  useEffect(() => {
    document.title = "كل المنتجات — المتجر الجزائري";
  }, []);

  return (
    <div className="ui-wrap">
      <div className="ui-page-head">
        <h1 className="ui-page-title">كل المنتجات</h1>
        <p className="ui-page-sub">
          {products.length} منتج متوفر للطلب الآن، مع الدفع عند الاستلام وتوصيل
          إلى 58 ولاية.
        </p>
      </div>

      {categories.length > 1 ? (
        <div className="ui-chips">
          <button
            type="button"
            className={`ui-chip${active ? "" : " is-active"}`}
            onClick={() => setSearchParams({})}
          >
            الكل
          </button>

          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={`ui-chip${
                active === category.name ? " is-active" : ""
              }`}
              onClick={() => setSearchParams({ category: category.name })}
            >
              {category.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="ui-chips" />
      )}

      <ProductGrid products={visible} />

      <CTASection
        title="لم تجد ما تبحث عنه؟"
        text="تصفّح كل المنتجات أو تواصل معنا عبر إكمال الطلب وسنتصل بك لتأكيد التفاصيل."
        to="/"
        label="العودة إلى الرئيسية"
        icon={false}
      />

      <div className="ui-pad-bottom" />
    </div>
  );
}

export default Products;
