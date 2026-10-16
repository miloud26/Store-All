import { Link } from "react-router-dom";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

function CategorySection({ categories }) {
  if (!categories || !categories.length) {
    return null;
  }

  return (
    <div className="ui-cats" id="categories">
      {categories.map((category) => (
        <Link
          key={category.name}
          className="ui-cat"
          to={`/products?category=${encodeURIComponent(category.name)}`}
        >
          <span className="ui-cat-icon" aria-hidden="true">
            <CategoryOutlinedIcon />
          </span>

          <span>
            <span className="ui-cat-name">{category.name}</span>
            <br />
            <span className="ui-cat-count">
              {category.count} {category.count === 1 ? "منتج" : "منتجات"}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default CategorySection;
