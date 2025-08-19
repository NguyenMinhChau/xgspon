import { useNavigate } from 'react-router-dom';
import bgHome from '../assets/images/bg_home.jpg';
import btnBack from '../assets/images/btn_back.png';
import h1Systems from '../assets/images/h1_system.png';
import ubuntuSystem from '../assets/images/system_1.png';
import win11System from '../assets/images/system_2.png';
import btnDownload from '../assets/images/system_download.png';
import RenderList from '../components/RenderList';
import Wrapped from '../Wrapped';

export default function OperatingSystems() {
	const navigate = useNavigate();

	const handleBackClick = () => {
		// navigate(-1); // Quay lại trang trước đó
		navigate('/');
		// Hoặc điều hướng đến một đường dẫn cụ thể, ví dụ: navigate('/home');
	};

	const cardData = [
		{
			img: ubuntuSystem,
			imgBtnDownload: btnDownload,
			pathDownload: 'hedieuhanh/ubuntu-24.04.3-lts.iso',
		},
		{
			img: win11System,
			imgBtnDownload: btnDownload,
			pathDownload: 'hedieuhanh/windows-11-disk-image-x64.iso',
		},
	];

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
				<div className="w-[min(200px,50vw)] h-auto mt-4 mb-8">
					<img
						src={h1Systems}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/>
				</div>
				<RenderList data={cardData} columns={2} mdColsGird={1} />
			</div>
		</Wrapped>
	);
}
