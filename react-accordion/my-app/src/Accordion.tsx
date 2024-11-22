import { useState } from 'react';
import { TopicCard } from './TopicCard';

type Props = {
  topics: {
    id: number;
    title: string;
    content: string;
  }[];
};

export function Accordion({ topics }: Props) {
  const [topic, setTopic] = useState<number | null>(null);

  function handleClick(id: number) {
    setTopic((prevId) => (prevId === id ? null : id));
  }

  return (
    <TopicCard topics={topics} onClick={handleClick} selectedTopic={topic} />
  );
}
