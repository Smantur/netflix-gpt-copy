const Videotitle = (props) => {
    const { title, overview } = props;
    return (
        <div className="w-screen aspect-video  video-title absolute pt-[20%] px-24  bg-gradient-to-r from-black">
            <div className="p-4 text-white font-bold text-xl">{title}</div>
            <div className="w-1/4 text-white px-4 text-xl">{overview}</div>
            <div className="flex">
            <div className="px-10  py-4 w-8 mx-2 bg-white rounded-md ">
                <button >Play</button>
            </div>
            <div className="px-10  py-4 w-8 mx-2 bg-gray-500 rounded-md ">
                <button>Info</button>
            </div>
            </div>
        </div>
    )
}
export default Videotitle;