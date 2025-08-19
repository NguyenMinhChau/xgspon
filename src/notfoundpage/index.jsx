import { useNavigate } from 'react-router-dom';
import Wrapped from '../Wrapped';
import bgHome from '../assets/images/bg_home.jpg';
import btnBack from '../assets/images/btn_back.png';

export default function PageNotFound() {
	const navigate = useNavigate();
	const handleBackClick = () => {
		// navigate(-1); // Quay lại trang trước đó
		navigate('/');
		// Hoặc điều hướng đến một đường dẫn cụ thể, ví dụ: navigate('/home');
	};
	return (
		<Wrapped
			styleDiv={{
				backgroundImage: `url(${bgHome})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
			}}
		>
			<div className="py-3 flex flex-col">
				<div
					className="w-[min(120px,30vw)] h-auto mb-4 cursor-pointer transition-transform duration-300 hover:scale-110 hover:brightness-110"
					onClick={handleBackClick}
				>
					<img
						src={btnBack}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/>
				</div>
				<div className="flex items-center justify-center">
					{/* <div className="w-full h-full lg:w-[500px] lg:h-[500px] md:w-[500px] md:h-[500px]">
						<img src={page404} className="w-full h-full" loading="lazy" />
					</div> */}
				</div>
			</div>
		</Wrapped>
	);
}
