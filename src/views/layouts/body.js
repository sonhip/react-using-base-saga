import React from 'react';
import PropTypes from 'prop-types';

const Body = (props) => {
    const { children } = props;
    return <div className='h-screen bg-indigo-300 pt-16'>{children}</div>;
};

Body.propTypes = {
    children: PropTypes.node.isRequired,
};
export default React.memo(Body);
