import * as React from 'react';

export default function Footer() {
	return (
		<React.Fragment>
			<div
				className="py-2 px-1 lg:!bg-transparent"
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.1)',
					borderTop: '1px solid #FFFFFF2A',
				}}
			>
				<div className="w-full lg:w-[50%] md:w-[50%] text-[15px] h-auto text-white">
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
