import './Items.css';

type Props = {
  items: string[];
};

export function Items({ items }: Props) {
  return (
    <div className="list-wrapper">
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
