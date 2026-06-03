const SearchBox = () => {
  return <div>
    <section class="py-4 bg-white">
    <div class="container mx-auto px-4  lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-lg p-8">
                <div class="flex items-center space-x-4 mb-8">
                    <div class="flex-1 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input class="flex h-10 w-full border bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 py-3 text-lg border-gray-200 rounded-lg"
                        placeholder="Search for tests, packages, or health checkups" value=""  />
                    </div>
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg">Search</button>
              </div>
                      
                <div class="text-center mb-6">
                    <h3 class="text-lg font-semibold text-gray-700">You may be looking for</h3></div>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div class="p-6 pt-0 space-y-2">
                            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-6 h-6 text-blue-500">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700">Pathology</p>
                        </div>
                    </div>
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div class="p-6 pt-0 space-y-2">
                            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-test-tube w-6 h-6 text-green-500">
                                    <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"></path>
                                    <path d="M8.5 2h7"></path>
                                    <path d="M14.5 16h-5"></path>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700">Sample Collection</p>
                        </div>
                    </div>
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div class="p-6 pt-0 space-y-2">
                            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package w-6 h-6 text-purple-500">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700">Laboratory Products</p>
                        </div>
                    </div>
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div class="p-6 pt-0 space-y-2">
                            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope w-6 h-6 text-orange-500">
                                    <path d="M11 2v2"></path>
                                    <path d="M5 2v2"></path>
                                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                                    <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                                    <circle cx="20" cy="10" r="2"></circle>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700">Consultation</p>
                        </div>
                    </div>
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div class="p-6 pt-0 space-y-2">
                            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-cyan-500">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700">Prescription</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  </div>;
};

export default SearchBox;
