function SecondNavBar({ children }) {
  return (
    <div className="flex justify-center ">
      <div className="justify-between w-8/12 relative">
        <div className="flex space-x-10 items-center p-4">
          <a
            href="#"
            className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-2"
          >
            Posts
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            Mentions
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            Reviews
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            Followers
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            Photos
          </a>

          <div className="relative group">
            <button className="text-gray-500 hover:text-gray-800 flex items-center">
              More
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="hidden group-hover:block absolute bg-white shadow-lg border mt-2 w-32">
              <a
                href="#"
                className="block px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Option 2
              </a>
            </div>
          </div>
        </div>
        <div className=" absolute right-4 top-4">
          <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm7-2a2 2 0 100 4 2 2 0 000-4zm7 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        <main className="flex min-h-screen flex-col p-4 bg-slate-200">
          {children}
        </main>
      </div>
    </div>
  );
}

export default SecondNavBar;
