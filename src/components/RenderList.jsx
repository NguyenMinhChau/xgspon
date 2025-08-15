import { Button, SvgIcon } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

const cardData = [
	{
		img: 'https://picsum.photos/800/450?random=1',
		tag: 'Engineering',
		title: 'Revolutionizing software development with cutting-edge tools',
		description:
			'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
		authors: [
			{ name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
			{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
		],
	},
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
];

const SyledCard = styled(Card)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: 0,
	height: '100%',
	backgroundColor: (theme.vars || theme).palette.background.paper,
	'&:hover': {
		backgroundColor: 'transparent',
		cursor: 'pointer',
	},
	'&:focus-visible': {
		outline: '3px solid',
		outlineColor: 'hsla(210, 98%, 48%, 0.5)',
		outlineOffset: '2px',
	},
}));

const SyledCardContent = styled(CardContent)({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	padding: 16,
	flexGrow: 1,
	'&:last-child': {
		paddingBottom: 16,
	},
});

const StyledTypography = styled(Typography)({
	display: '-webkit-box',
	WebkitBoxOrient: 'vertical',
	WebkitLineClamp: 2,
	overflow: 'hidden',
	textOverflow: 'ellipsis',
});

function Author({ authors }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				gap: 2,
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '16px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: 1,
					alignItems: 'center',
				}}
			>
				<AvatarGroup max={3}>
					{authors.map((author, index) => (
						<Avatar
							key={index}
							alt={author.name}
							src={author.avatar}
							sx={{ width: 24, height: 24 }}
						/>
					))}
				</AvatarGroup>
				<Typography variant="caption">
					{authors.map((author) => author.name).join(', ')}
				</Typography>
			</Box>
			<Typography variant="caption">July 14, 2021</Typography>
		</Box>
	);
}

const DownloadIcon = () => {
	return (
		<SvgIcon sx={{ height: 21, width: 100 }}>
			<svg
				class="w-6 h-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
				/>
			</svg>
		</SvgIcon>
	);
};

export default function RenderList({ data = cardData }) {
	const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

	const handleFocus = (index) => {
		setFocusedCardIndex(index);
	};

	const handleBlur = () => {
		setFocusedCardIndex(null);
	};
	return (
		<Grid container spacing={2} columns={12}>
			{data?.map((item, index) => {
				return (
					<Grid key={index} size={{ xs: 12, md: 4 }}>
						<SyledCard
							variant="outlined"
							onFocus={() => handleFocus(2)}
							onBlur={handleBlur}
							tabIndex={0}
							className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
							sx={{ height: '100%' }}
						>
							<CardMedia
								component="img"
								alt="green iguana"
								image={cardData[0].img}
								sx={{
									height: { sm: 'auto', md: '50%' },
									aspectRatio: { sm: '16 / 9', md: '' },
								}}
							/>
							<SyledCardContent>
								<Typography gutterBottom variant="caption" component="div">
									{cardData[0].tag}
								</Typography>
								<Typography gutterBottom variant="h6" component="div">
									{cardData[0].title}
								</Typography>
								<StyledTypography
									variant="body2"
									color="text.secondary"
									gutterBottom
								>
									{cardData[0].description}
								</StyledTypography>
							</SyledCardContent>
							<Author authors={cardData[0].authors} />
							<Button
								fullWidth
								variant="container"
								onClick={() => alert('DOWNLOAD...')}
								size="large"
								style={{
									borderRadius: 0,
									backgroundColor: '#16a34a',
								}}
								startIcon={<DownloadIcon />}
							>
								<Typography
									fontSize={14}
									fontWeight={700}
									color="#FFF"
									component="div"
								>
									DOWNLOAD
								</Typography>
							</Button>
						</SyledCard>
					</Grid>
				);
			})}
		</Grid>
	);
}
