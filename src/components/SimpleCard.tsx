interface SimpleCardProps {
  data: {
    title?: string;
    text?: string;
    items?: {
      itemTitle: string;
      itemContent: string;
    }[];
    destination?: string;
  };
}

export default function SimpleCard(props: Readonly<SimpleCardProps>) {
  return (
    // <div className="mb-4 px-6 py-6 w-full rounded-3xl bg-gray-100 dark:bg-gray-400">
    <div className="max-w-full gap-x-2 mb-4 max-h-full px-4 w-full md:w-[300px] lg:w-[375px] xl:px-6 rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-600/10 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50">
      <div className="group p-6 max-h-full sm:p-8">
        <h4 className="font-semibold text-center text-gray-600 text-lg md:text-2xl mb-6 dark:text-gray-200">
          {props.data.title}
        </h4>
        <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10 dark:text-gray-200">
          {props.data.text}
        </p>
        {props.data.items && (
          <ul className="mb-6 text-gray-600  dark:text-gray-300">
            {props.data.items.map((item, index) => (
              <li key={index} className="mb-1">
                <span className="font-bold ">{item.itemTitle}</span>{" "}
                {item.itemContent}
              </li>
            ))}
          </ul>
        )}
        <a
          href={props.data.destination}
          className="text-indigo-500 hover:underline hover:cursor-pointer"
        >
          Conocé más...
        </a>
      </div>
    </div>
  );
}
