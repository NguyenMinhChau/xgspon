import * as React from 'react';

export default function Footer() {
	return (
		<React.Fragment>
			<div
				className="border-t border-white py-2 px-1 lg:!bg-transparent"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
			>
				<div
					className="w-full lg:w-[60%] md:w-[80%] text-[15px] h-auto text-white"
					style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
				>
					Website được sử dụng duy nhất với mục đích test/trải nghiệm tốc độ
					download dữ liệu dung lượng lớn trong sự kiện ra mắt công nghệ XGS-PON
					và Wi-Fi 7 của FPT
					{/* <img
						src={footerImg}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/> */}
				</div>
			</div>
		</React.Fragment>
	);
}
