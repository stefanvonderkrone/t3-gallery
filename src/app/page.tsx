import Link from "next/link";

const mockUrls = [
  'https://utfs.io/f/9f959783-08f0-4524-b435-1ff228349592-anmzt3.45.48.png',
  'https://utfs.io/f/5b744bf4-c0e7-4ddc-ba7e-3a5a213c8780-anmzt3.45.44.png',
  'https://utfs.io/f/e37895be-43ea-48a7-a257-6c4cdae9e434-anmzt3.45.35.png',
  'https://utfs.io/f/6ae57fb6-1254-427f-b6c6-f419d7efe8fa-anmzt3.45.39.png',
]

const mockImages = mockUrls.map((url, index) => ({url, id: index + 1}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
            <div />
          </div>
        ))}
      </div>
    </main>
  );
}
