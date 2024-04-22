import Videocomponent from "./Videocomponent";
import Videotitle from "./Videotitle";
const Maincontainer = (props) => {
    const { id, title, overview } = props.movie;
    return (
        <div className="pt-24 px-4">
            <Videotitle  title={title} overview={overview}></Videotitle>
            <Videocomponent id={id}></Videocomponent>
        </div>
    )
}
export default Maincontainer;