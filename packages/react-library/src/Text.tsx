import "./text.css";

interface Properties {
    input?: string;
}

const Text = ( properties: Properties) => {
    return (
        <span className={"text"}>
            {
                properties.input
            }
        </span>
    );
};

export default Text;

export { Text };

export type { Properties };
