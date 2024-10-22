import './ToggleSwitch.css';

type Props = {
  trigger: boolean;
  label: string;
  onClick: () => void;
};

export function ToggleSwitch({ trigger, label, onClick }: Props) {
  return (
    <div onClick={onClick}>
      <input type="checkbox" checked={trigger} readOnly />
      <div className={`switch-outter ${trigger ? 'on' : 'off'}`}>
        <div
          className={`switch-inner ${trigger ? 'knob-on' : 'knob-off'}`}></div>
      </div>
      <p>{label}</p>
    </div>
  );
}
