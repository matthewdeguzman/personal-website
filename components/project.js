import Link from "next/link";

export default function Project({
  title,
  description,
  startTime,
  endTime,
  github,
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-6 gap-y-10 gap-x-6">
          <div className="mt-4">
            <div>
              <h3 className="text-sm text-gray-700">{description}</h3>
              <Link href={github} className="mt-1 text-sm text-gray-500">
                github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
