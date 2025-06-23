const Navbar = () => {
  return (
    <div className="w-full bg-amber-50">
      <nav className="bg-white shadow-md">
        <ul className="flex justify-between items-center bg-white shadow-md p-4">
          <li className="font-bold text-2xl cursor-pointer">
            Course Management
          </li>
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
      </nav>

      <div>
        <header className="bg-red-800 text-white p-4">
          <h1 className="text-3xl font-bold text-center">Welcome to Course Management</h1>
          <p className="mt-2 text-lg text-center">
            Manage your course effectively
          </p>
          <nav className="mt-4">
            <ul className="flex justify-between">
              <li className="cursor-pointer hover:text-gray-400">Home</li>
              <li className="cursor-pointer hover:text-gray-400">Home</li>
              <li className="cursor-pointer hover:text-gray-400">Home</li>
              <li className="cursor-pointer hover:text-gray-400">Home</li>
              <li className="cursor-pointer hover:text-gray-400">Home</li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
