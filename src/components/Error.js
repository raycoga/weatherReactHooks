import React from 'react';

const Error = ({message}) => {
    return (
        <div className="card-panle red darken-4 error col s12">

            {message}

        </div>
    );
};

export default Error;