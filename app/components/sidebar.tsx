export default function Sidebar() {
    return (
        <div className="flex w-80 h-fit bg-lime-600 rounded-xl">
            <nav className=" sticky mw-90 z-20 bg-dark ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center gap-x-3 rtl:space-x-reverse ">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="26" height="26" x="0" y="0" viewBox="0 0 24 24" ><g><g data-name="Layer 2"><path fill="#232323" d="M5 22.75H3A1.752 1.752 0 0 1 1.25 21V5A1.752 1.752 0 0 1 3 3.25h2A1.752 1.752 0 0 1 6.75 5v16A1.752 1.752 0 0 1 5 22.75zm-2-18a.25.25 0 0 0-.25.25v16a.25.25 0 0 0 .25.25h2a.25.25 0 0 0 .25-.25V5A.25.25 0 0 0 5 4.75zM12 22.75h-2A1.752 1.752 0 0 1 8.25 21V3A1.752 1.752 0 0 1 10 1.25h2A1.752 1.752 0 0 1 13.75 3v18A1.752 1.752 0 0 1 12 22.75zm-2-20a.25.25 0 0 0-.25.25v18a.25.25 0 0 0 .25.25h2a.25.25 0 0 0 .25-.25V3a.25.25 0 0 0-.25-.25z" opacity="1" data-original="#232323" className=""></path><path fill="#7fbde7" d="M19.204 22.725a1.754 1.754 0 0 1-1.698-1.327L14.167 7.985a1.75 1.75 0 0 1 1.275-2.121l1.94-.483a1.749 1.749 0 0 1 2.12 1.276l3.34 13.412a1.754 1.754 0 0 1-1.274 2.12v.001l-1.942.483a1.762 1.762 0 0 1-.422.052zM17.806 6.83a.253.253 0 0 0-.062.007l-1.94.483a.248.248 0 0 0-.154.114.251.251 0 0 0-.028.19l3.339 13.413a.247.247 0 0 0 .304.181l1.94-.482a.252.252 0 0 0 .183-.305L18.048 7.02a.25.25 0 0 0-.242-.19z" opacity="1" data-original="#7fbde7" className=""></path></g></g></svg>
                        <span className="self-center font-semibold whitespace-nowrap text-black ">Your Library</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className=""><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 32 32" className=" hover:fill-white"><g><path fill-rule="nonzero" d="M17 4v11h11v2H17v11h-2V17H4v-2h11V4z" opacity="1" data-original="#000000" className=" hover:fill-white"></path></g></svg></button>
                    </div>
                </div>
                <ul className=" max-h-60  overflow-x-hidden">
                    <div className=" m-2 rounded-xl mb-8 text-white text-wrap">
                        <div className="block select-none max-w-sm p-4 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">Create your first playlist</h5>
                            <p className="text-sm mb-4 select-none text-gray-700 dark:text-gray-400">It's easy,we'll help you</p>
                            <button type="button" className="text-gray-900 font-semibold bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-3xl text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                                Create playlist
                            </button>
                        </div>
                    </div>
                    <div className=" m-2 bg-black  rounded-xl mb-8 text-white text-wrap">
                        <div className="block select-none max-w-sm p-4 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">Let's find some podcasts to follow</h5>
                            <p className="text-sm mb-4 select-none text-gray-700 dark:text-gray-400">We'll keep you updated on new episodes</p>
                            <button type="button" className="text-gray-900 font-semibold bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-3xl text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                                Browse podcasts
                            </button>
                        </div>
                    </div>
                </ul>
                <div className="flex text-wrap items-center gap-3 text-xs m-3 font-semibold mt-8">
                    <li className=" list-none"><a href="">Legal</a></li>
                    <li className=" list-none"><a href="">Safety & PrivacyCenter</a></li>
                    <li className=" list-none"><a href="">PrivacyPolicy</a></li>
                </div>
                <div className="flex text-wrap items-center m-3 text-xs font-semibold gap-3">
                    <li className=" list-none"><a href="">Cookies</a></li>
                    <li className=" list-none"><a href="">About Ads</a></li>
                    <li className=" list-none"><a href="">Accessibility</a></li>
                </div>
                <div className="flex m-3 text-xs font-semibold ">
                    <a href="" className="mb-4">Cookies</a>
                </div>

            </nav>
        </div>
    );
}