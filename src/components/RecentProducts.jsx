import { HeartIcon } from "@heroicons/react/24/outline";

import { recentProducts } from "../data/recentProduct";
console.log(recentProducts);
function RecentProducts() {
    return (
        <div className="container mx-auto">
            <h1 className="text-center font-bold mb-10 mt-10">
                RECENTLY VIEWED PRODUCTS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {recentProducts.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 m-4 rounded-lg shadow-md border border-gray-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="mt-6 flex justify-between">
                            <div className="text-black-500 font-semibold">
                                {product.price}
                            </div>
                            <div className="text-gray-600 line-through">
                                {product.oldPrice}
                            </div>
                            <div className="text-green-500 font-bold">
                                {product.offer}% OFF
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <div className="text-black-500 font-semibold">
                                {product.name}
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <div className="text-black-500 font-semibold">
                                {product.rating} | {product.purchaseCount}
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <div className="text-black-500 font-semibold">
                                Add to cart
                            </div>
                            <div className="flex items-center">
                                <HeartIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentProducts;
