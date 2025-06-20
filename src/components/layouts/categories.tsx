import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCategories from "../hooks/data/useCategories";

function Categories() {
  const { categories } = useCategories();
  return (
    <div className="text-center h-full w-full">
      <div className="text-white bg-primary rounded-t-md">
        <div className="flex items-center justify-between h-20 text-3xl px-4">
          <span>Categories</span>
          <FontAwesomeIcon className="text-black size-6" icon={faCaretDown} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-left">
        {categories.map((category) => (
          <div
            key={category.id}
            className="text-lg py-2 px-4 border-t border-l border-r border-gray-400 hover:bg-gray-200 w-full cursor-pointer last:border-b"
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
