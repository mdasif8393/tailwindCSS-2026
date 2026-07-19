import "./App.css";

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-500">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9ZlAJSkMjHfmYjjFd75ewcziLZMr5Xx_QOYkYWvy1A&s"
          alt="Learn With Sumit"
          className="h-24 mx-auto rounded-full ring ring-green-400"
        />
        <div className="text-center space-y-2">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Learn with Sumit</p>
            <p className="text-gray-500 font-medium">Youtube Channel</p>
          </div>
          <button className="px-4 py-1 border border-purple-200 rounded-full text-sm font-semibold text-purple-600">
            Visit now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
