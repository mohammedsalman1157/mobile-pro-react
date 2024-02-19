import { HeartIcon } from "@heroicons/react/24/outline";
import { similarProducts } from "../data/similarProducts";
function SimilarProducts() {
    return (
        <div class="flex flex-col bg-white ml-20 mr-20">
            <h1 class="text-center font-bold mb-10 mt-10">SIMILAR PRODUCTS</h1>
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {similarProducts.map((product, index) => (
                    <div class="bg-white p-6 rounded-lg shadow-md border border-[#dee0e0]">
                        <img
                            src={product.image}
                            alt="Product 1"
                            class="w-full h-64 object-cover rounded-lg"
                        />
                        <div class="mt-6 flex justify-between">
                            <div class="text-black-500 font-semibold">
                                ₹1,299
                            </div>
                            <div class="text-gray-600 line-through">
                                {product.price}
                            </div>
                            <div class="text-green-500 font-bold">
                                {product.offer}% OFF
                            </div>
                        </div>
                        <div class="mt-6 flex justify-between">
                            <div class="text-black-500 font-semibold">
                                {product.name}
                            </div>
                        </div>
                        <div class="mt-6 flex justify-between">
                            <div class="text-black-500 font-semibold">
                                {product.rating} | {product.purchaseCount}
                            </div>
                        </div>
                        <div class="mt-6 flex justify-between">
                            <div class="text-black-500 font-semibold">
                                Add to cart
                            </div>
                            <div class="flex items-center pr-3">
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

export default SimilarProducts;
