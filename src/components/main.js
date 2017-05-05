import React from 'react';

const Main = (props) => {
    return (
        <div className = "content">
            {props.children}
        </div>
    );
}

export default Main;