export default function Comment({data}){
    return (
        <div className="border-b border-border_color py-3">
            <div className="flex justify-between">
              <div className="font-semibold">
               {data?.name}
              </div>
              <div>
                {data?.time}
              </div>
            </div>
            <div className="mt-2 ">
                {data?.comment}
            </div>
        </div>
    )
}