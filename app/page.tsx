import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
export default function Home() {
  return (
    <div className="container mx-auto  m-2">
      <div className="flex flex-row ... gap-x-3 ">
        <div className="flex flex-col gap-y-3">
          <div className="flex w-80 h-40 bg-lime-600 p-4 rounded-xl">
            <ul className="gap-y-3">
              <li className="flex-row list-none mb-3"><a className="flex font-semibold items-center" href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.057,16.406c-0.188,0-0.282-0.094-0.47-0.188 c-1.411-0.847-3.198-1.317-5.079-1.317c-1.035,0-2.163,0.188-3.104,0.376c-0.188,0-0.376,0.094-0.47,0.094 c-0.376,0-0.658-0.282-0.658-0.658c0-0.376,0.188-0.658,0.564-0.658c1.223-0.282,2.446-0.47,3.763-0.47 c2.163,0,4.139,0.564,5.832,1.505c0.188,0.188,0.376,0.282,0.376,0.658C16.621,16.218,16.339,16.406,16.057,16.406z M17.091,13.773 c-0.188,0-0.376-0.094-0.564-0.188c-1.599-1.035-3.857-1.599-6.302-1.599c-1.223,0-2.352,0.188-3.198,0.376 c-0.188,0.094-0.282,0.094-0.47,0.094c-0.47,0-0.753-0.376-0.753-0.753c0-0.47,0.188-0.658,0.658-0.847 c1.129-0.282,2.258-0.564,3.857-0.564c2.634,0,5.079,0.658,7.149,1.881c0.282,0.188,0.47,0.47,0.47,0.753 C17.844,13.396,17.562,13.773,17.091,13.773z M18.314,10.762c-0.188,0-0.282-0.094-0.564-0.188 c-1.881-1.035-4.609-1.693-7.243-1.693c-1.317,0-2.728,0.188-3.951,0.47c-0.188,0-0.282,0.094-0.564,0.094 C5.428,9.54,5.051,9.069,5.051,8.505c0-0.564,0.282-0.847,0.658-0.941C7.215,7.188,8.814,7,10.507,7 c2.916,0,5.926,0.658,8.278,1.881c0.282,0.188,0.564,0.47,0.564,0.941C19.255,10.386,18.878,10.762,18.314,10.762z"></path>
              </svg>Spotify</a></li>
              <li className="flex-row list-none mb-3"><a className="flex gap-4 font-semibold items-center" href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" /></svg>Home</a></li>
              <li className="flex-row list-none mb-3 hover:text-white "><a className="flex gap-4 font-semibold items-center text-black hover:text-white" href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>Search</a></li>
            </ul>
          </div>
          {/* left 2nd side bar */}
          <div className="flex w-80 h-96 ">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className=" bg-stone-900  w-full h-4/5 rounded-xl">
          <Navbar></Navbar>
        </div>
      </div>
    </div>
  );
}
