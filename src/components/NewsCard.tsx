import { Space_Mono } from "next/font/google";
import React from "react";

interface NewsCardProps {
  data: {
    icon?: any;
    date?: string;
    title?: string;
    desc?: string;
    destination?: string;
  };
}

export default function NewsCard(props: Readonly<NewsCardProps>) {
  return (
    <div className="max-w-full m-4 max-h-full px-4 w-full xl:w-[500px] xl:px-6 rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-gray-600/10 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50">
      <div className="group p-2 max-h-full sm:p-2">
        <div className="flex flex-col items-start mt-4 space-x-3">

          <div className="flex flex-row">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 mx-2 bg-colores-boton2 rounded-md w-11 h-11 ">
              {React.cloneElement(props.data.icon, {
                className: "w-7 h-7 text-indigo-50",
              })}
            </div>
            <div className="p-3 text-gray-400">{props.data.date}</div>
          </div>

          <div className="m-4">
            <h4 className="text-lg font-small text-gray-800 dark:text-gray-200">
              {props.data.title}
            </h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              <span>{props.data.desc}</span>
              <br />
              <br />
              <a
                href={props.data.destination}
                className="text-indigo-500 hover:underline hover:cursor-pointer"
              >
                Conocé más...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
