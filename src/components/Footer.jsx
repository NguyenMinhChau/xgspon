import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import logoFPT from '../assets/logo/FPT_Telecom_logo.png';

function Copyright() {
	return (
		<Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
			{'Copyright © '}
			<Link color="text.secondary" href="https://fpt.vn/vi">
				FPT TELECOM
			</Link>
			&nbsp;
			{new Date().getFullYear()}
		</Typography>
	);
}

export default function Footer() {
	return (
		<React.Fragment>
			<Divider />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: { xs: 4, sm: 8 },
					py: { xs: 8, sm: 10 },
					textAlign: { sm: 'center', md: 'left' },
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<div>
						<Link color="text.secondary" variant="body2" href="#">
							Privacy Policy
						</Link>
						<Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
							&nbsp;•&nbsp;
						</Typography>
						<Link color="text.secondary" variant="body2" href="#">
							Terms of Service
						</Link>
						<Copyright />
					</div>
					<Stack
						direction="row"
						spacing={1}
						useFlexGap
						sx={{ justifyContent: 'left', color: 'text.secondary' }}
					>
						<div className="w-[85px] h-[25px] mr-2">
							<img src={logoFPT} className="w-full h-full" loading="lazy" />
						</div>
						{/* <IconButton
							color="inherit"
							size="small"
							href="https://github.com/mui"
							aria-label="GitHub"
							sx={{ alignSelf: 'center' }}
						>
							<GitHubIcon />
						</IconButton>
						<IconButton
							color="inherit"
							size="small"
							href="https://x.com/MaterialUI"
							aria-label="X"
							sx={{ alignSelf: 'center' }}
						>
							<TwitterIcon />
						</IconButton>
						<IconButton
							color="inherit"
							size="small"
							href="https://www.linkedin.com/company/mui/"
							aria-label="LinkedIn"
							sx={{ alignSelf: 'center' }}
						>
							<LinkedInIcon />
						</IconButton> */}
					</Stack>
				</Box>
			</Container>
		</React.Fragment>
	);
}
