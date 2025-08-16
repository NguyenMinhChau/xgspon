import cardFilms4k from '../assets/images/card_films.png';
import cardFilms4kHover from '../assets/images/card_films_hover.png';
import cardGames from '../assets/images/card_game.png';
import cardGamesHover from '../assets/images/card_game_hover.png';
import cardSystem from '../assets/images/card_system.png';
import cardSystemHover from '../assets/images/card_system_hover.png';
import h1Home from '../assets/images/h1_home.png';
import RenderList from '../components/RenderList';
import Wrapped from '../Wrapped';

const cardData = [
	{
		img: cardFilms4k,
		imgHover: cardFilms4kHover,
		path: '/films',
	},
	{
		img: cardGames,
		imgHover: cardGamesHover,
		path: '/games',
	},
	{
		img: cardSystem,
		imgHover: cardSystemHover,
		path: '/operating-systems',
	},
];

export default function Home() {
	return (
		<Wrapped>
			<div className="py-3 flex flex-col">
				<div className="w-[min(500px,90vw)] h-auto mb-4">
					<img
						src={h1Home}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/>
				</div>
				<RenderList data={cardData} />
			</div>
		</Wrapped>
	);
}
