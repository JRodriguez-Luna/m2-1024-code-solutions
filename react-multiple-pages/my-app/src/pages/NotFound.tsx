type Props = {
  onDone: () => void;
};

export function NotFound({ onDone }: Props) {
  return (
    <div className="flex">
      <div className="flex-1 py-12 text-center">
        <h3>Uh oh, we could not find the page you were looking for!</h3>
        <div onClick={onDone} className="text-gray-700 cursor-pointer">
          Return to the Dashboard
        </div>
      </div>
    </div>
  );
}
