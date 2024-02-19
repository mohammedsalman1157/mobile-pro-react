function Footer() {
    return (
        <footer class="bg-green-600">
            <div class="container mx-auto py-8 flex  lg:flex-row justify-between items-center">
                <div class="mb-4 lg:mb-0 mr-0 lg:mr-8 lg:order-2">
                    <h4 class="text-white font-bold text-2xl">
                        JOIN OUR <br />
                        VEIRDO FAM
                    </h4>
                    <p class="text-white">
                        Here is the space for marketing bro's to use some
                        combination of <br /> phabets to convince people to give
                        their email.
                    </p>
                </div>

                <form class="flex items-center lg:order-1">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        class="bg-white px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        class="bg-[#a63fae] text-white px-4 py-2 rounded-r-md"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            <div class="w-full flex justify-between">
                <div class="flex-1 flex justify-center items-center border border-[#112c20]">
                    <span class="text-[#112c20] font-bold">INSTAGRAM</span>
                </div>
                <div class="flex-1 flex justify-center items-center border border-[#112c20] ml-[-1px]">
                    <span class="text-[#112c20] font-bold">LINKEDIN</span>
                </div>
                <div class="flex-1 flex justify-center items-center border border-[#112c20] ml-[-1px]">
                    <span class="text-[#112c20] font-bold">WHATSAPP</span>
                </div>
                <div class="flex-1 flex justify-center items-center border border-[#112c20] ml-[-1px]">
                    <span class="text-[#112c20] font-bold">TWITTER</span>
                </div>
            </div>

            <div class="border-b border-[#112c20]">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-4 gap-x-6">
                        <div>
                            <h3 class="text-xl font-bold mb-4">CATEGORIES</h3>
                            <ul>
                                <li>New Arrivals</li>
                                <li>Bestsellers</li>
                                <li>Winter-Wear</li>
                                <li>T-Shirts</li>
                                <li>Shorts</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4">&nbsp;</h3>
                            <ul>
                                <li>Sweatshirts</li>
                                <li>T-Shirts</li>
                                <li>Vests</li>
                                <li>Oversized T-Shirts</li>
                                <li>Unisex</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4">COMPANY</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Work with Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4">
                                FOR CUSTOMERS
                            </h3>
                            <ul>
                                <li>Contact Us</li>
                                <li>FAQ's</li>
                                <li>Track Order</li>
                                <li>Return Policy</li>
                                <li>Shipping Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto px-4 flex justify-between items-center">
                <p>
                    @2023 VEIRDO. All Rights Reserved by Pratyaya E-commerce
                    Pvt. Ltd.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
