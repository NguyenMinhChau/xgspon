import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import logoFPTLeadTheSpeed from './assets//logo/FPT_lead_the_speed.png';
import Footer from './components/Footer';
import AppTheme from './theme/AppTheme';

export default function Wrapped({ children, ...props }) {
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

				<div className="w-[min(300px,90vw)] h-auto">
					<img
						src={logoFPTLeadTheSpeed}
						className="w-full h-auto object-contain"
						loading="lazy"
						alt="IMG"
					/>
				</div>

				<Container
					maxWidth="lg"
					component="main"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: { xs: '24px 0 !important', md: '48px 0 !important' }, // Responsive padding
						gap: { xs: 2, md: 4 }, // Responsive gap
						//minHeight: 'calc(100vh - 100px)', // Trừ đi chiều cao logo/footer
					}}
				>
					{children}
				</Container>
				<Footer />
			</div>
		</AppTheme>
	);
}
