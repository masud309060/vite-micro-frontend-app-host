import React from "react";
// @ts-ignore
const CountButton = React.lazy(() => import('remoteAppOne/CountButton'));

interface IProps {
    children?: React.ReactElement,

}
const MyButton:React.FC<IProps> = ({children, ...props}) => {

    if(CountButton) {
        return <CountButton {...props} >{children}</CountButton>
    } else {
        return null
    }
};

export default MyButton;