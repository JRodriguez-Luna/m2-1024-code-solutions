import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

type Props = {
  label: string;
  active: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ValidatedInput({ label, active, onChange }: Props) {
  return (
    <div>
      <label htmlFor="password">
        <span className="relative right-13 bottom-2">Password</span>
        <div className="flex items-center">
          <input
            type="password"
            className="mr-1"
            id="password"
            onChange={onChange}
          />
          <FaCheck className={`text-green-400 ${active ? '' : 'sr-only'}`} />
          <FaXmark className={`text-red-600 ${active ? 'sr-only' : ''}`} />
        </div>
        <div
          className={`relative right-2 top-2 text-red-600 ${
            !active ? '' : 'sr-only'
          }`}>
          {label}
        </div>
      </label>
    </div>
  );
}
