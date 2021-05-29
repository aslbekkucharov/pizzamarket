import React from 'react';

function Button({ className, outline, onClick, children }) {
    return (
        <button className={`button ${className} ${outline ? 'button--outline' : ''}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
