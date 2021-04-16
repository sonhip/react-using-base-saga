import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Body from './body';

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            <Body>{children}</Body>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default React.memo(Layout);
