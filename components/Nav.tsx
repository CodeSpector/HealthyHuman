const Nav = ({ zIndex }: { zIndex: string }) => {
  return (
    <nav className={zIndex}>
      <ul className="flex flex-row w-screen md:w-[85vw] text-xl text-sky-800 font-bold justify-end content-end mt-5 mr-6">
        <li className="px-3 md:px-5"><a href="/">Home</a></li>
        <li className="px-3 md:px-5"><a href="/store">Shop</a></li>
        <li className="px-3 md:px-5"><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  )
};

export default Nav;
