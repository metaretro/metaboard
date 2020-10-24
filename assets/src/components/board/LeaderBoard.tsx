import React from 'react';

import {formatDateAgo, getColorByOrder} from "../../util";
import {Board, Player} from "../../types"


function PlayerBar(props: Player) {

  const color = "bg-" + getColorByOrder(props.index) + "-500"

  return (
    <>
      <div className="flex flex-row content-center justify-center w-full py-3 justify-items-stretch">
        <div className="self-center flex-none w-24 pr-4 text-right">
          <div className="right-0 inline-block px-3 py-1 font-bold text-center text-gray-700 bg-gray-200 rounded-full">
            {props.index + 1}
          </div>
        </div>
        <div className="relative self-center flex-1 w-64">
          <div
            className={"absolute p-3 overflow-hidden text-white whitespace-no-wrap rounded " + color}
            style={{ width: props.percentage }}
          >
            {props.name}
          </div>
          <div className="w-full p-3 truncate bg-gray-200 rounded">
            {props.name}
          </div>
        </div>
        <div className="self-center flex-none w-24 pl-4 font-semibold">
          {props.score}p
        </div>
      </div>
    </>
  )

}


export default function LeaderBoard(props: Board) {
  return (
    <>
      <section className="relative flex items-center content-center justify-center pt-8 pb-16">
        <div className="content-center w-full mt-6 max-w-screen-md">
          <div className="max-w-xl px-2 mx-auto mt-6 mb-10 ">
            <h1 className="text-2xl font-semibold text-center">
            { props.name }
            </h1>
          </div>
          <div className="mb-10">
            { props.items && props.items
              .map(d =>
                ({
                  ...d,
                  percentage: (props.max_score ? d.score/props.max_score*100 : 0) + "%"
                })
              ).map(d => <PlayerBar {...d} />)
              }
          </div>

          <div className="mx-auto mt-10 text-xs text-center text-gray-500">
            Updated { formatDateAgo(props.updated_at) }
          </div>
        </div>
      </section>
    </>
  )
}