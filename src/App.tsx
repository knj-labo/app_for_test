import React, { useState } from 'react';
import { Button } from './shared/Button';

export const App: React.FC = () => {
    const [isVisible, setIsVisible] = useState(!false)
    const handleClick = () => setIsVisible(false);
    return (
        <div>
            {isVisible && (
                <Button label='text' onClick={handleClick}/>
            )}
        </div>
    )
};