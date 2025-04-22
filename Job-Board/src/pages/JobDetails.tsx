import { useParams } from 'react-router-dom';

export default function JobDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Job Details - {id}</h1>
      <p>This is a placeholder for job ID: {id}. You can fetch and show full details here.</p>
    </div>
  );
}
