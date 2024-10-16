type Props = {
  label: string;
  color: string;
  msg: string;
  onClick: () => void;
};

export function HotButton({ label, color, msg, onClick }: Props) {
  return (
    <div>
      <button className={color} onClick={onClick}>
        {label}
      </button>
      <p>{msg}</p>
    </div>
  );
}
