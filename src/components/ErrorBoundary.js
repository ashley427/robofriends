import React, { useState } from 'react';

const ErrorBoundary = (props) => {

    const [hasError] = useState(false);

    return hasError ? <h1>oops! That is not good..</h1> : props.children;


}

export default ErrorBoundary;
