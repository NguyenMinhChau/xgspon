import Wrapped from '../Wrapped';
import page404 from '../assets/images/page_404.png';

export default function PageNotFound() {
	return (
		<Wrapped>
			<div className="flex items-center justify-center">
				<div className="w-full h-full lg:w-[500px] lg:h-[500px] md:w-[500px] md:h-[500px]">
					<img src={page404} className="w-full h-full" loading="lazy" />
				</div>
			</div>
		</Wrapped>
	);
}
