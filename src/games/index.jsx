import { useNavigate } from 'react-router-dom';
import bgHome from '../assets/images/bg_home.jpg';
import btnBack from '../assets/images/btn_back.png';
import games03 from '../assets/images/games_3.png';
import games05 from '../assets/images/games_5.png';
import btnDownload from '../assets/images/games_download.png';
import h1Games from '../assets/images/h1_games.png';
import RenderList from '../components/RenderList';
import Wrapped from '../Wrapped';

export default function Games() {
	const navigate = useNavigate();

	const handleBackClick = () => {
		// navigate(-1); // Quay lại trang trước đó
		navigate('/');
		// Hoặc điều hướng đến một đường dẫn cụ thể, ví dụ: navigate('/home');
	};

	const cardData = [
		{
			img: games03,
			imgBtnDownload: btnDownload,
			pathDownload: 'games/war-thunder',
		},
		{
			img: games05,
			imgBtnDownload: btnDownload,
			pathDownload: 'games/x-plane-11',
		},
		// {
		// 	img: games01,
		// 	imgBtnDownload: btnDownload,
		// 	// pathDownload: 'games/call-of-duty-black-ops-coldwar.',
		// },
		// {
		// 	img: games02,
		// 	imgBtnDownload: btnDownload,
		// 	// pathDownload: 'games/red-dead-redemption-2',
		// },
		// {
		// 	img: games04,
		// 	imgBtnDownload: btnDownload,
		// 	// pathDownload: 'games/il-2-sturmovik-battle-of-stalingrad',
		// },
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
