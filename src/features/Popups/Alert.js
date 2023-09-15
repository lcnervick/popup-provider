import React, { useContext } from "react";
import PopupContext from "./Popups.context";
import Lightbox from "./Lightbox";

import successIcon from '../../common/images/ok.png';
import failIcon from '../../common/images/fail.png';
import warnIcon from '../../common/images/warning.png';
import infoIcon from '../../common/images/info.png';


// This function takes the data.Message from Alert and returns a string or a
// react component so that showLightbox's 2nd argument can be anything.
function AlertBody({ Message, actions }) {
	if (typeof Message === 'function') return <Message popup={{ close: actions.close }} />;
	return <div popup={{ close: actions.close }}>{ Message }</div>;
}

export default function Alert({ data }) {
    console.log("Showing Alert", data);
    const { closeAlert } = useContext(PopupContext);
	const close = () => { 
        closeAlert(data.id);
        data.callback();
    };

    let iconType;
    switch (data.type) {
        case 'success':
            iconType = successIcon; break;
        case 'fail':
            iconType = failIcon; break;
        case 'warn':
            iconType = warnIcon; break;
        default:
            iconType = infoIcon; break;
    }
    const iconProps = {
        action: close,
        image: iconType
    };

    return (
        <Lightbox data={data} icon={iconProps}>
            <AlertBody Message={data.Message} actions={{ close }} />
            <button
                className='button dark invert active center'
                onClick={() => { close(); }}
            >
            OK
            </button>
        </Lightbox>
	);
}
