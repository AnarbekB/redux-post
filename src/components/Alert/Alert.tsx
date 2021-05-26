import React, {ReactElement} from "react";

interface Props {
    message: string

    delete: () => void
}

export function Alert(props: Props): ReactElement {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {props.message}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => props.delete()}
            />
        </div>
    )
}