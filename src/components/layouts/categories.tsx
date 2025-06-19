import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
  { id: 1, name: "Dresses" },
  { id: 2, name: "Shirts" },
  { id: 3, name: "Jeans" },
  { id: 4, name: "Swimwear" },
  { id: 5, name: "Sleepwear" },
  { id: 6, name: "Sportswear" },
  { id: 7, name: "Jumpsuits" },
  { id: 8, name: "Blazers" },
  { id: 9, name: "Jackets" },
  { id: 10, name: "Shoes" },
];

function Categories() {
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
