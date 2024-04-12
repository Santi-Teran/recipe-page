import Image from "next/image";

export default function Landing() {
  return (
    <div>
      <Image
        src="/image-omelette.jpeg"
        alt="Background"
        layout="responsive"
        priority="true"
        width={600}
        height={400}
        className="md:rounded-2xl mb-8"
      />
      <div className="flex flex-col gap-y-4 px-6 md:px-0">
        <h1 className="young-serif text-4xl">Simple Omelette Recipe</h1>
        <p className="text-Brown">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      </div>
      <div className="flex flex-col my-8 gap-y-4 bg-Rose rounded-2xl p-8">
        <h3 className="text-xl text-Raspberry font-semibold">Preparation time</h3>
        <ul className="list-disc list-inside flex flex-col gap-3">
          <li className="text-Brown font-semibold">Total: <span className="text-Brown font-normal">Approximately 10 minutes</span></li>
          <li className="text-Brown font-semibold">Preparation: <span className="text-Brown font-normal">5 minutes</span></li>
          <li className="text-Brown font-semibold">Cooking: <span className="text-Brown font-normal">5 minutes</span></li>
        </ul>
      </div>
    </div>
  );
}