const Nav = ({ zIndex }: { zIndex: string }) => {
  return (
    <nav className={zIndex}>
      <ul className="hidden md:flex flex-row w-[85vw] text-xl text-sky-800 font-bold justify-end content-end mt-5 mr-5">
        <li className="px-5"><a href="/">Home</a></li>
        <li className="px-5"><a href="/store">Shop</a></li>
        <li className="px-5"><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  )
};

export default Nav;
