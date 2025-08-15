import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown';
import logoFPT from '../assets/logo/FPT_Telecom_logo.png';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexShrink: 0,
	borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
	backdropFilter: 'blur(24px)',
	border: '1px solid',
	borderColor: (theme.vars || theme).palette.divider,
	backgroundColor: theme.vars
		? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
		: alpha(theme.palette.background.default, 0.4),
	boxShadow: (theme.vars || theme).shadows[1],
	padding: '8px 12px',
}));

export default function AppAppBar() {
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();
	const location = useLocation(); // Lấy thông tin URL hiện tại

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const MENUS = [
		{
			label: 'FILMS',
			path: '/films',
		},
		{
			label: 'GAMES',
			path: '/games',
		},
		{
			label: 'VIDEOS',
			path: '/videos',
		},
	];

	return (
		<AppBar
			position="fixed"
			enableColorOnDark
			sx={{
				boxShadow: 0,
				bgcolor: 'transparent',
				backgroundImage: 'none',
				mt: 'calc(var(--template-frame-height, 0px) + 28px)',
			}}
		>
			<Container maxWidth="lg">
				<StyledToolbar variant="dense" disableGutters>
					<Box
						sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}
					>
						<div className="w-[85px] h-[25px] mr-2">
							<img src={logoFPT} className="w-full h-full" loading="lazy" />
						</div>
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							{MENUS?.map((item, index) => {
								const { label, path } = { ...item };
								const isActive = location.pathname === path; // Kiểm tra menu có active không
								return (
									<Button
										key={index}
										variant="text"
										color="info"
										size="small"
										onClick={() => {
											navigate(path);
										}}
										sx={{
											fontWeight: isActive ? '700' : '600', // Làm đậm khi active
											color: isActive ? '#22c55e!important' : null, // Đổi màu khi active
										}}
									>
										{label}
									</Button>
								);
							})}
						</Box>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							gap: 1,
							alignItems: 'center',
						}}
					>
						<ColorModeIconDropdown />
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
						<ColorModeIconDropdown size="medium" />
						<IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="top"
							open={open}
							onClose={toggleDrawer(false)}
							PaperProps={{
								sx: {
									top: 'var(--template-frame-height, 0px)',
								},
							}}
						>
							<Box sx={{ p: 2, backgroundColor: 'background.default' }}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									<IconButton onClick={toggleDrawer(false)}>
										<CloseRoundedIcon />
									</IconButton>
								</Box>
								{MENUS?.map((item, index) => {
									const { label, path } = { ...item };
									const isActive = location.pathname === path; // Kiểm tra menu có active không
									return (
										<MenuItem
											key={index}
											onClick={() => {
												navigate(path);
												setOpen(false); // Đóng drawer khi click
											}}
											sx={{
												fontWeight: isActive ? 'bold' : 'normal', // Làm đậm khi active
												color: isActive ? 'primary.main' : 'inherit', // Đổi màu khi active
											}}
										>
											{label}
										</MenuItem>
									);
								})}
							</Box>
						</Drawer>
					</Box>
				</StyledToolbar>
			</Container>
		</AppBar>
	);
}
