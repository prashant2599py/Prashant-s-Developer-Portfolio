import React from "react";


const PhoneCallRedirect = ({phoneNumber}) => {
    const handlePhonecall = () => {
        window.location.href = `tel:${phoneNumber}`;

    };
    return <button onClick={handlePhonecall}>{phoneNumber}</button>
}

export default PhoneCallRedirect;