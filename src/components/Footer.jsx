function Footer() {
    return (
        <footer class="bg-green-600 mt-20">
            <div class="container mx-auto py-8 flex  flex-col md:flex-row lg:flex-row  justify-between items-center">
                <div class="mb-4 lg:mb-0 lg:mr-8 lg:order-2">
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

                <form class="flex items-center lg:order-1 mt-4 lg:mt-0 relative w-full md:w-1/3">
                    <div class="relative w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            class="w-full bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            class="bg-[#a63fae] text-white px-4 items-center h-8 mt-1 mr-1 rounded-md absolute right-0 top-0 bottom-0  capitalize"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>

            <div class="w-full flex flex-wrap justify-between">
                <div class="flex-1 flex justify-center items-center border border-[#112c20] mb-2">
                    <span class="text-[#112c20] font-bold">INSTAGRAM</span>
                </div>
                <div class="flex-1 flex justify-center items-center border border-[#112c20] mb-2">
                    <span class="text-[#112c20] font-bold">LINKEDIN</span>
                </div>
                <div class="flex-1 flex justify-center items-center border border-[#112c20] mb-2">
                    <span class="text-[#112c20] font-bold">WHATSAPP</span>
                </div>
                <div class="flex-1 flex justify-center items-center border border-[#112c20] mb-2">
                    <span class="text-[#112c20] font-bold">TWITTER</span>
                </div>
            </div>

            <div class="border-b border-[#112c20]">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <div class="container mx-auto px-4 flex justify-between items-center mt-4">
                <p class="text-white">
                    @2023 VEIRDO. All Rights Reserved by Pratyaya E-commerce
                    Pvt. Ltd.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
