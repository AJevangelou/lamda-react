const Loader = ({ type }) => {
  return (
    <div className={`relative flex justify-center items-center w-full ${type === "header" ? 'pt-[40vh]' : "pt-10"}`}>
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  )
}

export default Loader;
