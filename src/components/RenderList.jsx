import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
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
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import popupProgressComleted from '../assets/images/popup02.png';

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
	const navigate = useNavigate();
	const abortControllerRef = useRef(null);

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
		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
		}
		setOpen(false);
		setProgress(0);
	};

	const downloadFile = async (pathDownload) => {
		const ip = import.meta.env.VITE_IP_V4;
		const host = import.meta.env.VITE_HOST;
		const protocol = 'http://'; // Hoặc 'https://' tùy môi trường
		const downloadUrl = `${protocol}${ip}/${pathDownload}`;

		// Kích hoạt download
		window.open(downloadUrl, '_self');

		// try {
		// 	abortControllerRef.current = new AbortController();
		// 	setOpen(true);
		// 	setProgress(0);

		// 	const ip = import.meta.env.VITE_IP_V4;
		// 	const host = import.meta.env.VITE_HOST;
		// 	const protocol = 'http://'; // Hoặc 'https://' tùy môi trường
		// 	const downloadUrl = `${protocol}${host}/${pathDownload}`;

		// 	const response = await axios.get(downloadUrl, {
		// 		responseType: 'blob', // Important for handling binary data
		// 		headers: {
		// 			'Content-Type': 'application/octet-stream',
		// 		},
		// 		signal: abortControllerRef.current.signal,
		// 		onDownloadProgress: (progressEvent) => {
		// 			const total = progressEvent.total;
		// 			const loaded = progressEvent.loaded;
		// 			setProgress(total ? (loaded / total) * 100 : 0);
		// 		},
		// 	});

		// 	const blob = response.data;
		// 	const url = URL.createObjectURL(blob);

		// 	const contentDisposition = response.headers['content-disposition'];
		// 	let fileName = pathDownload.split('/').pop();
		// 	if (contentDisposition && contentDisposition.includes('filename=')) {
		// 		const match = contentDisposition.match(/filename="([^"]+)"/);
		// 		if (match) fileName = match[1];
		// 	}

		// 	const link = document.createElement('a');
		// 	link.href = url;
		// 	link.download = fileName || 'downloaded_file';
		// 	document.body.appendChild(link);
		// 	link.click();

		// 	document.body.removeChild(link);
		// 	URL.revokeObjectURL(url);
		// 	setOpen(false);
		// 	setProgress(100);
		// } catch (error) {
		// 	if (error.name !== 'AbortError') {
		// 		console.error('Download error:', error);
		// 	}
		// 	setOpen(false);
		// 	setProgress(0);
		// } finally {
		// 	abortControllerRef.current = null;
		// }
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
								sx={{
									height: '100%',
									backgroundColor: 'transparent!important',
									border: 'none!important',
								}}
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
						backgroundImage: `url(${
							progress >= 100 ? popupProgressComleted : null
						})`,
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
							color: '#000!important',
							backgroundColor: '#FFF!important',
						}}
					>
						<CloseIcon />
					</IconButton>
					{/* CONTENT THÔNG BÁO ĐANG UPLOAD FILE */}
					{progress < 100 && (
						<div className="flex flex-col items-center justìy-center gap-2">
							<DownloadIcon sx={{ fontSize: 40, color: '#8FCDEB!important' }} />
							<Typography
								id="download-progress-description"
								variant="h6"
								component="h2"
								sx={{ color: '#000', fontWeight: 700, textAlign: 'center' }}
							>
								Đang tải file xuống
							</Typography>
							<Typography
								id="download-progress-description"
								variant="h6"
								component="h6"
								sx={{
									color: '#000!important',
									fontWeight: 500,
									fontSize: 14,
									textAlign: 'center',
								}}
							>
								Quá trình tải file đang diễn ra, vui lòng chờ trong giây lát...
							</Typography>
						</div>
					)}
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
								backgroundColor: '#EEF9FF!important',
								'& .MuiLinearProgress-bar': {
									borderRadius: 5,
									backgroundColor: '#8FCDEB!important',
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
