import { useParams } from 'react-router-dom';

export default function MajorTopic() {
  const { major } = useParams();
  return <div>{major}</div>;
}
