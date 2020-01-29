import * as React from "react";


export function withApp(WrappedComponent) {
    return class extends React.Component {
        render() { return <WrappedComponent /> }
    }
}