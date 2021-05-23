import React from "react";

interface Props {
    message: string|null
}

export function Alert(props: Props) {
    return (
        <div className="alert alert-danger" role="alert">
            {props.message ? props.message : 'Error operation'}
        </div>
    )
}