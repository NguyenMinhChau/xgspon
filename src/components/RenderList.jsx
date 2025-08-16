import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import popupProgress from '../assets/images/popup_download.png';
import popupProgressComleted from '../assets/images/popup_download_comleted.png';

const SyledCard = styled(Card)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: 0,
	height: '100%',
	backgroundColor: 'transparent',
	position: 'relative',
	transition: 'all 0.3s ease',
	'&:hover': {
		cursor: 'pointer',
		transform: 'scale(1.01)',
	},
	'&:focus-visible': {
		outline: '3px solid',
		outlineColor: 'hsla(210, 98%, 48%, 0.5)',
		outlineOffset: '2px',
	},
}));

const DownloadButton = styled('img')(({ theme }) => ({
	position: 'absolute',
	bottom: '10px',
	left: '50%',
	transform: 'translateX(-50%)',
	width: '95%',
	height: 'auto',
	objectFit: 'contain',
	cursor: 'pointer',
	transition: 'all 0.3s ease',
	'&:hover': {
		transform: 'translateX(-50%) scale(1)',
		filter: 'brightness(1.1)',
	},
}));

export default function RenderList({
	data = [],
	columns = 12,
	mdColsGird = 2,
}) {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [open, setOpen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [imgPopupProgress, setImgPopupProgress] = useState(popupProgress);
	const navigate = useNavigate();

	const handleFocus = (index) => {
		setHoveredIndex(index);
	};

	const handleBlur = () => {
		setHoveredIndex(null);
	};

	const handleClick = (path) => {
		if (path) {
			navigate(path);
		}
	};

	const handleClose = () => {
		setOpen(false);
		setProgress(0);
	};

	const downloadFile = (pathDownload) => {
		setImgPopupProgress(popupProgress);
		const ip = import.meta.env.VITE_IP_V4 || 'default-ip';
		const protocol = 'http://'; // Hoặc 'https://' tùy môi trường
		const downloadUrl = `${protocol}${ip}/${pathDownload}`;

		// Kích hoạt download
		window.open(downloadUrl, '_self');

		// Giả lập tiến trình download
		let fakeProgress = 0;
		const interval = setInterval(() => {
			fakeProgress += Math.random() * 20;
			if (fakeProgress >= 100) {
				setImgPopupProgress(popupProgressComleted);
				fakeProgress = 100;
				clearInterval(interval);
				// Không tự động đóng popup khi hoàn tất
			}
			setProgress(fakeProgress);
		}, 500);

		// Tự động đóng popup sau 10 giây nếu chưa hoàn tất
		setTimeout(() => {
			if (fakeProgress < 100) {
				handleClose();
				clearInterval(interval);
			}
		}, 10000);
	};

	return (
		<>
			<Grid container spacing={2} columns={columns}>
				{data?.map((item, index) => {
					const {
						h1Text,
						img,
						imgHover,
						path,
						imgBtnDownload,
						alt,
						pathDownload,
					} = item;
					return (
						<Grid key={index} size={{ xs: 12, md: mdColsGird }}>
							<SyledCard
								variant="outlined"
								onMouseEnter={() => handleFocus(index)}
								onMouseLeave={handleBlur}
								onFocus={() => handleFocus(index)}
								onBlur={handleBlur}
								onClick={() => {
									if (path) {
										handleClick(path);
									}
								}}
								tabIndex={0}
								className={hoveredIndex === index ? 'Mui-focused' : ''}
								sx={{ height: '100%' }}
							>
								{h1Text && (
									<div
										className="
											absolute 
											top-4 
											left-4 lg:top-3 lg:left-3
											md:top-8 md:left-8
											text-[#19335A] 
											rounded-md 
											uppercase 
											font-bold 
											text-[1.2rem] lg:text-[1rem] md:text-[1.5rem]
										"
									>
										{h1Text}
									</div>
								)}
								<CardMedia
									component="img"
									alt={alt || 'Card Image'}
									image={imgHover && hoveredIndex === index ? imgHover : img}
								/>
								{imgBtnDownload && (
									<DownloadButton
										src={imgBtnDownload}
										alt={alt ? `${alt} Download Button` : 'Download Button'}
										onClick={(e) => {
											e.stopPropagation();
											if (pathDownload) {
												setOpen(true);
												setProgress(0);
												downloadFile(pathDownload);
											}
										}}
									/>
								)}
							</SyledCard>
						</Grid>
					);
				})}
			</Grid>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="download-progress-modal"
				aria-describedby="download-progress-description"
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 600 }}
			>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: { xs: '80%', sm: 350, md: 360 },
						minHeight: { xs: 250, sm: 280, md: 280 },
						backgroundColor: '#fff',
						backgroundImage: `url(${imgPopupProgress})`,
						backgroundSize: '100% 100%',
						backgroundPosition: 'center',
						borderRadius: 2,
						boxShadow: 24,
						p: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: '#000', // Màu trắng để nổi trên background
						}}
					>
						<CloseIcon />
					</IconButton>
					<div
						style={{
							width: '100%',
							position: 'absolute',
							bottom: 20,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<LinearProgress
							variant="determinate"
							value={progress}
							sx={{
								width: '95%',
								height: 10,
								borderRadius: 5,
								mb: 2,
								backgroundColor: '#EEF9FF',
								'& .MuiLinearProgress-bar': {
									borderRadius: 5,
									backgroundColor: '#8FCDEB',
								},
							}}
						/>
						<Typography
							variant="body1"
							fontSize={20}
							fontWeight={600}
							sx={{ color: '#000' }}
						>
							{Math.round(progress)}%
						</Typography>
					</div>
				</Box>
			</Modal>
		</>
	);
}
