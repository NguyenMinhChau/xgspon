import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import btnBack from '../assets/images/btn_back.png';
import filmsInfoBg from '../assets/images/films_4k_info.png';
import btnDownload from '../assets/images/films_download.png';
import fimlsBgItem from '../assets/images/films_item.png';
import h1Films from '../assets/images/h1_films.png';
import RenderList from '../components/RenderList';
import Wrapped from '../Wrapped';

export default function Films() {
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1); // Quay lại trang trước đó
		// Hoặc điều hướng đến một đường dẫn cụ thể, ví dụ: navigate('/home');
	};

	const cardData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item, index) => {
		const indexFilms = `${index + 1}`; // Bắt đầu từ 1
		return {
			h1Text: `Tập ${indexFilms}.mkv`,
			img: fimlsBgItem,
			imgBtnDownload: btnDownload,
			pathDownload: `phim4k/tap${indexFilms}.mkv`,
		};
	});

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
