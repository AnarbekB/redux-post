import React, {ReactElement} from "react";
import {hideAlert} from "../../redux/actions/alert";
import {IAction, IAlert, IRootState} from "../../interfaces";
import {connect} from "react-redux";
import {Alert} from "../Alert";

interface Props {
    alerts: IAlert[];

    hideAlert(alertId: number): IAction;
}

function AlertList(props: Props): ReactElement {
    const deleteAlert = (alertId: number): void => {
        props.hideAlert(alertId);
    }

    return <>{
            props.alerts.map(alert => <Alert message={alert.message} delete={() => deleteAlert(alert.id)} key={alert.id}/>)
    }</>;
}

const mapDispatchToProps = {
    hideAlert
};

const mapStateToProps = (state: IRootState) => {
    return {
        alerts: state.alert.alerts
    } as Props;
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertList);