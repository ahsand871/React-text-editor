import TextForm from "./Textarea";

export default function Summary(props) {
  return (
    <>
         { props.text.trim() !== "" && (
            <div className={`summary-container summary-container-${["light", "custom3"].includes(props.theme) ? "dark" : "light"}`}>
                <div className="stats">
                    <div className="stat">
                        <h1 className="textAreaHeading">Your Text Summary:</h1>
                        <p>{props.text.trim().split(/\s+/).length} words and {props.text.length} Characters</p>
                    </div>

                    <div className="stat">
                        <h3 className="textAreaHeading">Time Required to read this text.</h3>
                        <div className="reader">
                            <div className="r1">
                                <h6>Normal Person</h6>
                                <p>{Math.round(0.002 * props.text.trim().split(/\s+/).length)} minutes</p>
                            </div>
                            <div className="r1">
                                <h6>Slow Reader</h6>
                                <p>{Math.round(0.005 * props.text.trim().split(/\s+/).length)} minutes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="textAreaHeading">Preview</h1>
                <p className="preview-text">{props.text}</p>

            </div>

           
            )}
    </>
  )
}
