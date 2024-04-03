import { useParams } from 'react-router-dom';

export default function SubTopic() {
  const { sub } = useParams();
  return <div>{sub}</div>;
}
