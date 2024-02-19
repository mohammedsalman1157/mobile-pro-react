import {
    MagnifyingGlassIcon,
    UserIcon,
    HeartIcon,
    BookmarkSquareIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
    return (
        <div className="border-b">
            <nav>
                <div className="px-4">
                    <div className="flex flex-col md:flex-row items-center justify-around py-4 md:gap-32 sm:gap-10">
                        <div className="flex gap-10">
                            <span className="text-black text-2xl font-bold md:mb-0">
                                veirdo
                            </span>
                            <ul className="flex flex-wrap gap-4 justify-center items-center md:justify-start">
                                <li>
                                    <span className="text-black font-semibold">
                                        NEW ARRIVALS
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black font-semibold">
                                        MEN
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black font-semibold">
                                        WINTER COLLECTION
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black font-semibold">
                                        SHOP BY MERCH
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black font-semibold">
                                        UNISEX
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-10">
                            <div className="relative mt-2">
                                <input
                                    type="text"
                                    name="filterkey"
                                    id="filterkeyinput"
                                    className="bg-white block font-medium rounded-md border border-[#d2a7fb] px-4 py-2 text-gray-900 hover:border-[#d2a7fb] focus:border-[#d2a7fb] focus:ring-[#d2a7fb] focus:outline-none border-b-2 border-b-[#d2a7fb] border-r-2 border-r-[#d2a7fb] shadow-md"
                                    readOnly
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <MagnifyingGlassIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                            <div className="flex mt-2 md:mt-0 justify-end">
                                <div className="flex items-center pr-3">
                                    <UserIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="flex items-center pr-3">
                                    <HeartIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="flex items-center pr-3">
                                    <BookmarkSquareIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
