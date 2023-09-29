export function SideBar() {
    return (
        <div className="w-full sm:h-screen sm:overflow-y-scroll pl-2 pt-4 lg:h-auto lg:overflow-auto lg:pl-10">
            <div className="mt mb-3 font-semibold sm:text-xl font-sans lg:text-3xl lg:font-bold">
                Home
            </div>
            <div className="mb-3">
                <div className="mt mb-3 font-semibold sm:text-xl font-sans lg:text-3xl lg:font-bold">
                    New Releases
                </div>
                <div className="pl-2 lg:pl-3">
                    <div className="font-sans mb-2 lg:text-xl lg:font-semibold text-gray-300">
                        Last 30 days
                    </div>
                    <div className="font-sans mb-2">This week</div>
                    <div className="font-sans mb-2">Next week</div>
                    <div className="font-sans mb-2">
                        Release Calendar
                    </div>
                </div>
            </div>
            <div className="mb-3 lg:mb-5">
                <div className="mt mb-3 font-semibold sm:text-xl font-sans lg:text-3xl lg:font-bold">
                    Platforms
                </div>
                <div className="pl-2">
                    <div className="font-sans mb-2">PC</div>
                    <div className="font-sans mb-2">
                        Play Station 4
                    </div>
                    <div className="font-sans mb-2">Xbox one</div>
                    <div className="font-sans mb-2">
                        Release Calendar
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="mt mb-3 font-semibold sm:text-xl font-sans lg:text-3xl lg:font-bold">
                    Genres
                </div>
                <div className="pl-2">
                    <div className="font-sans mb-2">Action</div>
                    <div className="font-sans mb-2">Strategy</div>
                    <div className="font-sans mb-2">RPG</div>
                </div>
            </div>
        </div>
    );
}
