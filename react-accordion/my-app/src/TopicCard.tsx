import './TopicCard.css';

type Props = {
  topics: {
    id: number;
    title: string;
    content: string;
  }[];
  onClick: (id: number) => void;
  selectedTopic: number | null;
};

export function TopicCard({ topics, selectedTopic, onClick }: Props) {
  const box = topics.map((topic) => (
    <div key={topic.id} onClick={() => onClick(topic.id)}>
      <h2 className="box">{topic.title}</h2>
      <p className={`details ${selectedTopic === topic.id ? '' : 'hidden'}`}>
        {topic.content}
      </p>
    </div>
  ));

  return <div>{box}</div>;
}
