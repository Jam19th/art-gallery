//ButtonBar component
export default function ButtonBar (props) {
    return (
        <div className="ButtonBar">
            <button value={-5} onClick={props.updateId}>Way Back</button>
            <button value={-1} onClick={props.updateId}>Back</button>
            <button value={1} onClick={props.updateId}>Next</button>
            <button value={5} onClick={props.updateId}>Big Next</button>
        </div>
    )
}