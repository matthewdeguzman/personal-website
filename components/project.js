import Link from "next/link";

export default function Project({
  title,
  description,
  startTime,
  endTime,
  github,
  left,
}) {
  const titl = getTitle(title, left);
  const desc = gitDescription(description, github, left);
  const order = left ? "" : "md:-order-1"; // order of the description in the grid depends on if the title is on left
  return (
    <div className="mx-auto w-fit md:max-w-4xl mt-4 px-4 md:mt-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {titl}
        <div className={order}>{desc}</div>
      </div>
    </div>
  );
}

function getTitle(title, left) {
  const alignment = left ? "md:text-right md:pr-4" : "md:text-left md:pl-4";
  return (
    <h2
      className={
        "text-xl md:text-3xl font-bold tracking-tight text-gray-900 text-center " +
        alignment
      }
    >
      {title}
    </h2>
  );
}
function gitDescription(description, github, left) {
  const alignment = left ? "md:text-left md:pl-4" : "md:text-right md:pr-4";
  return (
    <div className={"text-center " + alignment}>
      <p className="mt-4 text-sm md:text-lg max-w-sm md:max-w-md text-gray-700 md:mt-0">
        {description}
      </p>
      <Link
        href={github}
        target="_blank"
        className="mt-1 text-sm text-gray-500"
      >
        github
      </Link>
    </div>
  );
}
