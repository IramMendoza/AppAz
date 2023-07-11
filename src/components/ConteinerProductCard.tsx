import { ReactNode } from "react"

interface Props {
    children : ReactNode
    title : string
}

const ConteinerProductCard= ({ children, title } : Props ) => {
  return (
    <div className="">
        <h1 
        className=" text-slate-800 text-4xl font-semibold text-center">
        {title}
        </h1>
        <div className=" flex justify-center w-full">
            <div className=" w-full flex overflow-x-auto pt-5 pb-[4rem]">
                {children}
            </div>
        </div>
    </div>
  )
}

export default ConteinerProductCard
