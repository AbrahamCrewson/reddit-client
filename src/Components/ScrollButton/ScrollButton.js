import React, {useState} from 'react';
import arrow from '../Images/scroll.png';
import './ScrollButton.css'
const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button id="scrollButton" onClick={scrollToTop}>
    <img style={{display: visible ? 'inline' : 'none'} }src={arrow} alt='Back To Top'/>
	
	</button>
);
}

export default ScrollButton;
