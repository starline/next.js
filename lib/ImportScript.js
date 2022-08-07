import { useEffect } from 'react';

const ImportScript = resourceUrl => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        script.async = true;
        const element = document.getElementsByTagName("head")[0];
		element.appendChild(script);

		return ()=>
			element.removeChild(script)
    }, [resourceUrl]);
};

export default ImportScript;