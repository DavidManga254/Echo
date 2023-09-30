import { useState } from 'react';

export function ShowMoreText(props: {
    text: string;
    maxLength: number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            {isExpanded ? (
                <div>
                    {props.text}
                    <button
                        onClick={toggleExpanded}
                        className="bg-white rounded text-black sm:text-xs p-1"
                    >
                        Show Less
                    </button>
                </div>
            ) : (
                <div>
                    {props.text.length > props.maxLength ? (
                        <span>
                            {props.text.slice(0, props.maxLength)}
                            <span style={{ color: 'blue' }}>...</span>
                        </span>
                    ) : (
                        props.text
                    )}
                    {props.text.length > props.maxLength && (
                        <button
                            onClick={toggleExpanded}
                            className="bg-white rounded text-black sm:text-xs p-1"
                        >
                            Show More
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
