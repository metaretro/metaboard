import React from 'react'
import {formatDateAgo} from "../../util";

type Board = {
  id: string;
  name: string;
  code: string;
  type: string;
  updated_at: number;
  created_at: number;
};

export default function BoardItem(props: Board) {

  return (
    <>
      <div className="px-6 py-3 mx-3 my-4 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200">
        <div className="flex flex-row justify-between">
          <div className="w-7/12 md:w-10/12 lg:w-10/12">
            <h2 className="overflow-hidden text-xl font-semibold text-blue-900 truncate">{props.name}</h2>
          </div>
          <div className="self-center px-2 font-semibold text-white capitalize bg-green-600 rounded-2xl">
            {props.type}
          </div>
        </div>

        <div className="w-full mb-2 text-xs text-gray-700 uppercase truncate">
          {props.code}
        </div>

        <div className="flex flex-row flex-wrap justify-between my-1">
          <div className="text-xs text-gray-700">
            Updated <span>{formatDateAgo(props.updated_at)}</span>
          </div>
        </div>
      </div>
    </>
  )
};