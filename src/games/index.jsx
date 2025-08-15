import { Box, Typography } from '@mui/material';
import Wrapped from '../Wrapped';
import RenderList from '../components/RenderList';

export default function Games() {
	return (
		<Wrapped>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
				<div>
					<Typography variant="h1" gutterBottom>
						Games
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
