import { HeartIcon } from "@heroicons/react/20/solid";

function SelectedProduct() {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-5">
            <div className="overflow-x-auto hide-scroll-bar">
                <div className="flex justify-center md:justify-start">
                    <img
                        src="https://veirdo.in/cdn/shop/files/a_4d123781-bff2-4b81-b8a7-c67a9cd999b0.jpg?v=1708080613&width=360"
                        alt="product 1"
                        className="w-56 h-72 object-cover mr-4"
                    />
                    <img
                        src="https://veirdo.in/cdn/shop/files/b_ceb78fd1-0dba-4762-a222-26df367cca35.jpg?v=1708080613&width=360"
                        alt="product 2"
                        className="w-56 h-72 object-cover mr-4"
                    />
                </div>
                <div className="flex mt-4 justify-center md:justify-start">
                    <img
                        src="https://veirdo.in/cdn/shop/files/f_75c421ba-f59c-4c1e-bbaa-573729cb52e2.jpg?v=1708080613&width=360"
                        alt="product 3"
                        className="w-56 h-72 object-cover mr-4"
                    />
                    <img
                        src="https://veirdo.in/cdn/shop/files/c_05315ff0-d298-45b6-9154-35aeadb5887b.jpg?v=1708080613&width=360"
                        alt="product 4"
                        className="w-56 h-72 object-cover mr-4"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <div className="mt-6 flex justify-between">
                    <div className="flex gap-4">
                        <div className="text-black font-semibold">₹479</div>
                        <div className="text-gray-600 line-through">₹1,199</div>
                        <div className="text-green-500 font-bold">60% OFF</div>
                    </div>
                    <HeartIcon
                        className="h-5 w-5 text-[#a63eae]"
                        aria-hidden="true"
                    />
                </div>
                <h2 className="text-xl font-semibold mt-4 md:mt-10">
                    XOXO Print Blue Men's Tshirt
                </h2>
                <h2 className="text-xl font-semibold mt-10">OFFERS</h2>
                <div className="flex mt-5">
                    <div className="flex-shrink-0 w-full p-4 bg-[#f8ffff] rounded-lg shadow-md border border-[#dcedf7]">
                        Buy 2 tees at just *699 <br />
                        Add any 2 tees to the cart to avail
                    </div>
                </div>
                <h2 className="text-lg font-semibold mt-5">COLOR - BEIGE</h2>
                <div className="flex flex-col bg-white m-auto p-auto">
                    <div class="flex overflow-x-scroll  hide-scroll-bar">
                        <div class="flex flex-nowrap lg:ml-40 ">
                            <div class="inline-block px-1">
                                <div class="w-20 h-20 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img
                                        src="https://veirdo.in/cdn/shop/files/c_05315ff0-d298-45b6-9154-35aeadb5887b.jpg?v=1708080613&width=360"
                                        alt="cutest kitten"
                                        className="w-20 h-20 object-cover mr-4"
                                    />
                                </div>
                            </div>
                            <div class="inline-block px-1">
                                <div class="w-20 h-20 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img
                                        src="https://veirdo.in/cdn/shop/files/c_05315ff0-d298-45b6-9154-35aeadb5887b.jpg?v=1708080613&width=360"
                                        alt="cutest kitten"
                                        className="w-20 h-20 object-cover mr-4"
                                    />
                                </div>
                            </div>{" "}
                            <div class="inline-block px-1">
                                <div class="w-20 h-20 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img
                                        src="https://veirdo.in/cdn/shop/files/c_05315ff0-d298-45b6-9154-35aeadb5887b.jpg?v=1708080613&width=360"
                                        alt="cutest kitten"
                                        className="w-20 h-20 object-cover mr-4"
                                    />
                                </div>
                            </div>{" "}
                            <div class="inline-block px-1">
                                <div class="w-20 h-20 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img
                                        src="https://veirdo.in/cdn/shop/files/c_05315ff0-d298-45b6-9154-35aeadb5887b.jpg?v=1708080613&width=360"
                                        alt="cutest kitten"
                                        className="w-20 h-20 object-cover mr-4"
                                    />
                                </div>
                            </div>{" "}
                            <div class="inline-block px-1">
                                <div class="w-20 h-20 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img
                                        src="https://veirdo.in/cdn/shop/files/c_05315ff0-d298-45b6-9154-35aeadb5887b.jpg?v=1708080613&width=360"
                                        alt="cutest kitten"
                                        className="w-20 h-20 object-cover mr-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-lg font-semibold mt-5">SELECT SIZE</h2>
                <div className="flex flex-col bg-white m-auto p-auto">
                    <div className="flex overflow-x-auto hide-scroll-bar">
                        <div className="flex flex-nowrap">
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    28
                                </div>
                            </div>
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    30
                                </div>
                            </div>{" "}
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    32
                                </div>
                            </div>{" "}
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    34
                                </div>
                            </div>{" "}
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    36
                                </div>
                            </div>{" "}
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    40
                                </div>
                            </div>{" "}
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    42
                                </div>
                            </div>{" "}
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    44
                                </div>
                            </div>{" "}
                            <div className="inline-block px-1">
                                <div className="border border-[#dcedf7] w-10 h-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex">
                                    46
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                </div>
                <button className="w-full md:w-auto mt-10 bg-[#00f092] hover:bg-[#00f092] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default SelectedProduct;
