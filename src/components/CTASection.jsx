import { Link } from "react-router-dom";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

function CTASection({
  title = "اكتشف منتجاتنا",
  text = "تصفّح كل المنتجات المتوفرة، واطلب ما يناسبك مع الدفع عند الاستلام والتوصيل إلى ولايتك.",
  to = "/products",
  label = "تصفّح كل المنتجات",
  icon = true,
}) {
  return (
    <section className="ui-cta">
      <h2>{title}</h2>
      <p>{text}</p>

      <Link className="ui-btn" to={to}>
        {icon ? <StorefrontOutlinedIcon fontSize="small" /> : null}
        {label}
      </Link>
    </section>
  );
}

export default CTASection;
