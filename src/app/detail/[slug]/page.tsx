import Categories from "@/components/layouts/categories";

const DetailProduct = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3 hidden lg:block">
        <Categories />
      </div>
      <div className="col-span-9 mt-2">
        <textarea value={slug} readOnly className="border-2 border-gray-300 w-full h-full" />
      </div>
    </div>
  );
};

export default DetailProduct;
