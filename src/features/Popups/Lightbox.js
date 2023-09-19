import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import PopupContext from './Popups.context';
import closeButton from '../../common/images/close.png';
import './Lightbox.css';

// This function takes the data.Body from Lightbox and returns a string or a
// react component so that showLightbox's 2nd argument can be anything.
function LightboxBody({ Body, actions }) {
	if (typeof Body === 'function') return <Body popup={{ close: actions.close }} />;
	return <div popup={{ close: actions.close }}>{ Body }</div>;
}


export default function Lightbox({ data, children, icon = null }) {
	const { closeLightbox } = useContext(PopupContext);
	const close = () => {
		closeLightbox(data.id);
	};

	icon = icon || {
		image: closeButton,
		action: close
	};

	return (
		<div className='lightbox-wrapper' id={data.id}>
			<div className="shadowbox"></div>
			<Draggable handle=".lightbox-title" defaultPosition={{ x: '-50px', y: '-50px' }}>
				<div 
					className="lightbox" 
					onClick={(e) => e.stopPropagation()}
				>
					<div className="lightbox-header">
						<div className='lightbox-title'>
							<h2>{data.title}</h2>
						</div>
						<button className='closeButton' onClick={icon.action}>
							<img src={icon.image} alt="Close Popup" />
						</button>
					</div>
				
					<div className='lightbox-content'>
						<LightboxBody Body={data.Body || children} actions={{ close }} />
					</div>
				</div>
			</Draggable>
		</div>
	);
}

/*
function goLightbox(w, h, title, evt, cb) {
	let zMax = $("*").maxZIndex();
	//if (zMax < 10500) zMax = 10500;

	let $lightbox = $('<div>').addClass("lightbox").appendTo("body"),
		$shadowbox = $('<div>').addClass("shadowbox").appendTo("body"),
		$header = $('<div>').addClass("lightbox-header").appendTo($lightbox);
		$title = $('<div>').addClass("lightbox-title").append($('<h2>' + title + '</h2>')).appendTo($header),
		$closeButton = $('<div>').addClass("closeButton").append($('<img src="' + '/images/close.gif">')).appendTo($header)
			.on('click', function (e) {
				e.stopPropagation();
				destroyLightbox();
			}),
		$content = $('<div>').addClass("lightbox-content").appendTo($lightbox),
		params = calcWindowSize(w, h);

	function destroyLightbox() {
		$lightbox.fadeOut(200, function () {
			$lightbox.remove();
			$shadowbox.remove();
		});
		$(window).off('resize');
		$('body').removeClass('stop-scrolling');
		$('body').off('touchmove');
	}
	function reposition() {

		params = calcWindowSize(w,$lightbox.outerHeight());

		$lightbox.css({
			marginTop: params.top,
			marginLeft: params.left,
			marginRight: 'auto',
			//height: (params.height == "auto" ? "auto" : (params.height / $(window).height() * 100) + 'vh'),
			width: params.width + 'px',
		});
	}

	if (jQuery.ui) {
		$lightbox.draggable({
			handle: ".lightbox-title",
			// handle: ".lightbox-header:not(.closeButton)",
			cancel: ".closeButton",
			cursor: "move",
		})
		$header.disableSelection();
	}

	//lightbox functions and properties
	$lightbox.close = function () { destroyLightbox(); };
	$lightbox.content = $content;
	$lightbox.closeButton = $closeButton;
	$lightbox.title = $title;
	$lightbox.shadowbox = $shadowbox;
	$lightbox.reposition = function() { reposition(); }
	///////////////////////////////////

	evt = (typeof evt === 'undefined' || evt === null) ? { pageX: 0, pageY: 0 } : evt;

	$shadowbox.css({
			width: '100%',
			height: $(document).height() + "px",
			zIndex: zMax + 1,
			backgroundColor: 'rgba(0,0,0,0.4)'
		}).fadeIn(100, function () {

			$('body').addClass('stop-scrolling');
//			$('body').on('touchmove', function(e){e.preventDefault()});

			$lightbox.css({
				top: evt.pageY + "px",
				left: evt.pageX + "px",
				marginTop: '0px',
				marginLeft: '0px',
				height: 'auto',
				width: '0px',
				//transform: "translate(-50%, -50%)",
				zIndex: zMax + 2,
				display: 'flex'
			})
				// .show()
				.animate({
					top: "0px",
					left: "0px",
					marginTop: params.top,
					marginLeft: params.left,
					marginRight: 'auto',
					height: (params.height == "auto" ? "auto" : (params.height / $(window).height() * 100) + 'vh'),
					width: params.width + 'px',
					// top: "50%",
					// left:"50%",
					// transform: 'translate(-50%, -50%)'

				}, 0, function () {
					if(params.height == "auto") {
						var observer = new MutationObserver(function(mutations) {
							// console.log('resizing lightbox', params, $lightbox.outerHeight());
							$lightbox.css({marginTop:(parseFloat(params.top)-$lightbox.outerHeight()/2)+"px"});
							setTimeout(function() {
								$lightbox.css({marginTop:(parseFloat(params.top)-$lightbox.outerHeight()/2)+"px"});
							},50);
						});
						// pass in the target node, as well as the observer options
						observer.observe($lightbox.content[0], { attributes: true, childList: true, characterData: true });

					}
					// $content.css('height', (params.height == "auto" ? "auto" : ($lightbox.height() - 50) + "px"));
					$(window).on('resize', function (e) {
						if($(e.target).hasClass("ptWorkSpace") || $(e.target).hasClass("pt-editable")) return;
						if ($lightbox.is(":visible")) {
							params = calcWindowSize(w, h);
							$lightbox.css({
								top: "0px",
								left: "0px",
								marginTop: params.top,
								marginLeft: params.left,
								marginRight: 'auto',
								height: (params.height == "auto" ? "auto" : (params.height / $(window).height() * 100) + 'vh'),
								width: params.width + 'px'
							});
							// $content.height(($lightbox.height() - 50) + "px");
						}
					});
					if (typeof cb == 'function') cb($lightbox);
					return $lightbox;
				});

		}).on('remove', function(e) {
			hideShadow($shadowbox);
		});
}
*/
