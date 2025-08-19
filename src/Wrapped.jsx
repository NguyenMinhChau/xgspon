import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import AppTheme from './theme/AppTheme';

export default function Wrapped({ children, ...props }) {
	const navigate = useNavigate();
	return (
		<AppTheme {...props}>
			<div
				style={{
					// backgroundImage: `url(${bgHome})`,
					// backgroundSize: 'cover',
					// backgroundPosition: 'center',
					// backgroundRepeat: 'no-repeat',
					minHeight: '100vh', // Đảm bảo div bao phủ toàn bộ chiều cao viewport
					padding: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 60px)', // Responsive padding
				}}
			>
				<CssBaseline enableColorScheme />

				<div
					className="w-[min(300px,90vw)] h-[30px] cursor-pointer"
					// onClick={() => {
					// 	navigate('/');
					// }}
				>
					{/* <img
						src={logoFPTLeadTheSpeed}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/> */}
				</div>

				<Container
					maxWidth="lg"
					component="main"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: { xs: '24px 0 !important', md: '48px 0 !important' }, // Responsive padding
						gap: { xs: 2, md: 4 }, // Responsive gap
						minHeight: { md: 'calc(100vh - 200px)' },
						margin: '0!important',
					}}
				>
					{children}
				</Container>
				<Footer />
			</div>
		</AppTheme>
	);
}
