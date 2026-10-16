import { useEffect } from "react";
import { data } from "../data";
import { getCategories } from "../productUtils";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import CategorySection from "../components/CategorySection";
import WhyUs from "../components/WhyUs";
import CTASection from "../components/CTASection";

function Home() {
  const products = data.filter((product) => product.id);
  const featured = products.filter((product) => product.featured);
  const featuredList = featured.length ? featured : products;
  const moreProducts = products.filter(
    (product) => !featuredList.some((item) => item.id === product.id),
  );
  const categories = getCategories(products);
  const firstProduct = products[0];

  useEffect(() => {
    document.title = "المتجر الجزائري — تسوّق أونلاين مع الدفع عند الاستلام";
  }, []);

  return (
    <>
      <HeroSection product={firstProduct} />

      <div className="ui-wrap">
        <section className="ui-section">
          <div className="ui-section-head">
            <div>
              <span className="ui-eyebrow">اختيارات المتجر</span>
              <h2 className="ui-section-title">منتجات مميزة</h2>
              <p className="ui-section-sub">
                منتجات متوفرة الآن مع الدفع عند الاستلام والتوصيل إلى ولايتك.
              </p>
            </div>
          </div>

          <ProductGrid products={featuredList} />
        </section>

        {categories.length ? (
          <section className="ui-section">
            <div className="ui-section-head">
              <div>
                <span className="ui-eyebrow">تصفّح حسب القسم</span>
                <h2 className="ui-section-title">الأقسام</h2>
              </div>
            </div>

            <CategorySection categories={categories} />
          </section>
        ) : null}

        <section className="ui-section">
          <div className="ui-section-head">
            <div>
              <span className="ui-eyebrow">لماذا المتجر الجزائري</span>
              <h2 className="ui-section-title">الشراء عندنا بسيط وآمن</h2>
            </div>
          </div>

          <WhyUs />
        </section>

        <CTASection />

        {moreProducts.length ? (
          <section className="ui-section">
            <div className="ui-section-head">
              <div>
                <span className="ui-eyebrow">المزيد</span>
                <h2 className="ui-section-title">منتجات أخرى</h2>
              </div>
            </div>

            <ProductGrid products={moreProducts} compact />
          </section>
        ) : null}

        <CTASection
          title="جاهز لطلبك؟"
          text="أكمل معلوماتك في صفحة المنتج وسنتصل بك لتأكيد الطلب، والدفع عند الاستلام."
          to={firstProduct ? `/product/${firstProduct.id}` : "/products"}
          label="اطلب الآن"
          icon={false}
        />

        <div className="ui-pad-bottom" />
      </div>
    </>
  );
}

export default Home;
