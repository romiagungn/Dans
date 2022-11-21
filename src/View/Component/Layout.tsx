import React from "react";
import PropTypes from "prop-types";
import Header from "./Header"
import { ToastContainer } from 'react-toastify';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const defaultProps = {};

const Component: React.FC<any> = (props: any) => {
    const { children } = props;

    return (
        <div className="">
            <Header />
            <div className="mt-5" style={{}}>{children}</div>
            <ToastContainer/>
        </div>
    );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
export default Component