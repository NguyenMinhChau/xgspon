import * as React from 'react';
import footerImg from '../assets/images/footer.png';

export default function Footer() {
	return (
		<React.Fragment>
			<div className="w-full h-auto">
				<img
					src={footerImg}
					className="w-full h-auto object-contain"
					loading="lazy"
					alt="IMG"
				/>
			</div>
		</React.Fragment>
	);
}
