import React, { useContext } from "react";
import PopupContext from "./Popups.context";
import Lightbox from "./Lightbox";
import questionIcon from '../../common/images/question.png';

// This function takes the data.Message from Confirm and returns a string or a
// react component so that showLightbox's 2nd argument can be anything.
function ConfirmBody({ Message, actions }) {
	if (typeof Message === 'function') return <Message popup={{ close: actions.close }} />;
	return <div popup={{ close: actions.close }}>{ Message }</div>;
}

export default function Confirm({ data }) {
    const { closeConfirm } = useContext(PopupContext);
	const close = (confirmed) => { 
        closeConfirm(data.id);
        data.callback(confirmed);
    };

    return (
        <Lightbox data={data} icon={{ image: questionIcon, action: null }}>
            <ConfirmBody Message={data.Message} actions={{ close }} />
            <div className="button-container">
				<button
					className='button dark invert active'
					onClick={() => { close(true); }}
				>
				YES
				</button>

				<button
					className='button dark active'
					onClick={() => { close(false); }}
				>
				NO
				</button>
			</div>
        </Lightbox>
	);
}
