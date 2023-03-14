import Link from "next/link";

export default function Project({
  title,
  description,
  startTime,
  endTime,
  github,
}) {
  return (
    <div className="bg-white border-2 border-black">
      <div className="mx-auto py-8 px-4 sm:py-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mt-6 text-sm text-gray-700">{description}</p>
        <Link
          href={github}
          target="_blank"
          className="mt-1 text-sm text-gray-500"
        >
          github
        </Link>
      </div>
    </div>
  );
}
