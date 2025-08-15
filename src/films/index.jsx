import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RenderList from '../components/RenderList';
import Wrapped from '../Wrapped';

export default function Films() {
	// console.log(import.meta.env.VITE_PATH_ENV);
	return (
		<Wrapped>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
				<div>
					<Typography variant="h1" gutterBottom>
						Films
					</Typography>
					<Typography>
						Stay in the loop with the latest about our products
					</Typography>
				</div>
				<RenderList />
			</Box>
		</Wrapped>
	);
}
