import { Link } from 'wouter';

const CategoryBanner = ({ category }) => {
  return (
    <Link href={`/category/${category.id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full group border border-gray-200 overflow-hidden">
        <div className="aspect-square flex items-center justify-center bg-gray-50 p-4">
          <img
            src={category.image}
            alt={category.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
            }}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryBanner;