import { useNavigate } from 'react-router-dom';
import btnBack from '../assets/images/btn_back.png';
import games01 from '../assets/images/games_1.png';
import games02 from '../assets/images/games_2.png';
import games03 from '../assets/images/games_3.png';
import games04 from '../assets/images/games_4.png';
import games05 from '../assets/images/games_5.png';
import btnDownload from '../assets/images/games_download.png';
import h1Games from '../assets/images/h1_games.png';
import RenderList from '../components/RenderList';
import Wrapped from '../Wrapped';

export default function Games() {
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1); // Quay lại trang trước đó
		// Hoặc điều hướng đến một đường dẫn cụ thể, ví dụ: navigate('/home');
	};

	const cardData = [
		{
			img: games01,
			imgBtnDownload: btnDownload,
			// pathDownload: 'games/call-of-duty-black-ops-coldwar.',
		},
		{
			img: games02,
			imgBtnDownload: btnDownload,
			// pathDownload: 'games/red-dead-redemption-2',
		},
		{
			img: games03,
			imgBtnDownload: btnDownload,
			pathDownload: 'games/war-thunder',
		},
		{
			img: games04,
			imgBtnDownload: btnDownload,
			// pathDownload: 'games/il-2-sturmovik-battle-of-stalingrad',
		},
		{
			img: games05,
			imgBtnDownload: btnDownload,
			pathDownload: 'games/x-plane-11',
		},
	];

	return (
		<Wrapped>
			<div className="py-3 flex flex-col">
				<div
					className="w-[min(80px,24vw)] h-auto mb-4 cursor-pointer transition-transform duration-300 hover:scale-110 hover:brightness-110"
					onClick={handleBackClick}
				>
					<img
						src={btnBack}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/>
				</div>
				<div className="w-[min(200px,50vw)] h-auto mb-4">
					<img
						src={h1Games}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/>
				</div>
				<RenderList data={cardData} columns={5} mdColsGird={1} />
			</div>
		</Wrapped>
	);
}
