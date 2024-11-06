type Props = {
  onNavigate: (page: string) => void;
};
export function Header({ onNavigate }: Props) {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <div onClick={() => onNavigate('about')} className="text-white">
              About
            </div>
          </li>
          <li className="inline-block py-2 px-4">
            <div onClick={() => onNavigate('dashboard')} className="text-white">
              Dashboard
            </div>
          </li>
        </ul>
      </nav>
      {/* Page content goes here */}
    </div>
  );
}
