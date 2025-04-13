import { useParams } from 'react-router-dom';

const videos = {
  1: 'https://www.youtube.com/embed/Ke90Tje7VS0',
  2: 'https://www.youtube.com/embed/PoRJizFvM7s',
};

export default function VideoPlayer() {
  const { id } = useParams();
  const videoUrl = videos[id];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Course Video</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={videoUrl}
          title="Course Video"
          className="w-full h-[400px] rounded-lg shadow"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
