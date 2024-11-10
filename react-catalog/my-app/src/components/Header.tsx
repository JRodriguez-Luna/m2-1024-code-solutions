export function Header() {
  const navItem = ['About', 'Catalog'];
  const listItem = [];

  for (let i = 0; i < navItem.length; i++) {
    listItem.push(<li className="pt-2 cursor-pointer">{navItem[i]}</li>);
  }

  return (
    <div className="flex w-100 h-10 bg-slate-900">
      <nav className="w-full text-white">
        <ul className="flex space-x-3 px-3 ">{listItem}</ul>
      </nav>
    </div>
  );
}
