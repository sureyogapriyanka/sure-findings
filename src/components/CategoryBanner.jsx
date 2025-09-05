import { Link } from 'wouter';

const CategoryBanner = ({ category }) => {
  return (
    <Link href={`/sure-findings/category/${category.id}`}>
      <div className="category-banner bg-card rounded-lg p-4 shadow-md cursor-pointer text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1" data-testid={`category-banner-${category.id}`}>
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-24 object-cover rounded-md mb-2"
        />
        <h3 className="font-semibold">{category.name}</h3>
        <p className="text-sm text-muted-foreground">Shop now</p>
      </div>
    </Link>
  );
};

export default CategoryBanner;
