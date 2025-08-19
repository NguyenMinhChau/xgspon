import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import film6dot46gb from '../assets/images//films_item6.46GB.png';
import btnBack from '../assets/images/btn_back.png';
import filmsInfoBg from '../assets/images/films_4k_info.png';
import btnDownload from '../assets/images/films_download.png';
import film6dot63gb from '../assets/images/films_item6.63GB.png';
import film6dot83gb from '../assets/images/films_item6.83GB.png';
import film6dot85gb from '../assets/images/films_item6.85GB.png';
import film6dot94gb from '../assets/images/films_item6.94GB.png';
import film7dot09gb from '../assets/images/films_item7.09GB.png';
import film7dot13gb from '../assets/images/films_item7.13GB.png';
import film7dot1gb from '../assets/images/films_item7.1GB.png';
import film7dot23gb from '../assets/images/films_item7.23GB.png';
import film7dot32gb from '../assets/images/films_item7.32GB.png';
import h1Films from '../assets/images/h1_films.png';
import RenderList from '../components/RenderList';
import Wrapped from '../Wrapped';

export default function Films() {
	const navigate = useNavigate();

	const handleBackClick = () => {
		// navigate(-1); // Quay lại trang trước đó
		navigate('/');
		// Hoặc điều hướng đến một đường dẫn cụ thể, ví dụ: navigate('/home');
	};

	const DATA_IMG = [
		film7dot13gb,
		film6dot83gb,
		film7dot09gb,
		film7dot32gb,
		film7dot1gb,
		film6dot85gb,
		film6dot63gb,
		film7dot23gb,
		film6dot46gb,
		film6dot94gb
	];

	const cardData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item, index) => {
		const indexFilms = `${index + 1}`; // Bắt đầu từ 1
		return {
			h1Text: `Tập ${indexFilms}.mkv`,
			img: DATA_IMG[index],
			imgBtnDownload: btnDownload,
			pathDownload: `phim4k/tap${indexFilms}.mkv`,
		};
	});

	return (
		<Wrapped>
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
				<div className="w-[min(200px,50vw)] h-auto mb-4">
					<img
						src={h1Films}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/>
				</div>
				<Grid container spacing={2} columns={10}>
					<Grid size={{ xs: 12, md: 3 }}>
						<div className="w-full h-auto mb-4">
							<img
								src={filmsInfoBg}
								className="w-full h-auto object-contain"
								loading="lazy"
								alt="IMG"
							/>
						</div>
					</Grid>
					<Grid size={{ xs: 12, md: 7 }}>
						<RenderList columns={4} mdColsGird={1} data={cardData} />
					</Grid>
				</Grid>
			</div>
		</Wrapped>
	);
}
