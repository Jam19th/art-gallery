//Gallery Component
export default function Gallery(props) {
    return (
        <div className="Gallery" style={{ 'width': '100%' }} >
            <h1>{props.title}</h1>
            <h2>By: {props.artistDisplayName}</h2>
            <p>Medium: {props.medium}</p>
            <p>From the {props.culture} culture</p>
            <img
                style={{ width: '80vh' }}
                src={props.primaryImage}
                alt={props.title}
            />
            <p>Object ID: {props.objectID}</p>
        </div>
    )
}