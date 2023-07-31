import React, {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import PageNotFoundFallback from "../fallback/PageNotFoundFallback.tsx";


interface IProps {
    children: React.ReactNode;
}
const Externals: React.FC<IProps> = ({children}) => {
    return (
        <Suspense
            fallback="loading...."
        >
            <ErrorBoundary fallback={<PageNotFoundFallback />} >
                { children }
            </ErrorBoundary>
        </Suspense>
    );
};

export default Externals;