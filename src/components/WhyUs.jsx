import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const ITEMS = [
  {
    icon: <PaymentsOutlinedIcon />,
    title: "الدفع عند الاستلام",
    text: "تدفع عند وصول الطلب إلى باب منزلك، دون أي دفع مسبق.",
  },
  {
    icon: <LocalShippingOutlinedIcon />,
    title: "توصيل إلى 58 ولاية",
    text: "توصيل سريع إلى كل الولايات، مع إمكانية تتبّع طلبك عبر اتصالنا بك.",
  },
  {
    icon: <VerifiedOutlinedIcon />,
    title: "منتجات مختارة",
    text: "نعرض تفاصيل كل منتج بالصور ونتحقق منه قبل الإرسال.",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: "خدمة عملاء",
    text: "فريقنا يتصل بك لتأكيد الطلب ويجيب عن أي استفسار قبل الشحن.",
  },
];

function WhyUs() {
  return (
    <div className="ui-why" id="why-us">
      {ITEMS.map((item) => (
        <div className="ui-why-item" key={item.title}>
          <span className="ui-why-icon" aria-hidden="true">
            {item.icon}
          </span>

          <h3 className="ui-why-title">{item.title}</h3>
          <p className="ui-why-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default WhyUs;
