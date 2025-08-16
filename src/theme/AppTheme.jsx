import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { inputsCustomizations } from './customizations/inputs';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { colorSchemes, shadows, shape, typography } from './themePrimitives';

export default function AppTheme(props) {
	const { children, disableCustomTheme, themeComponents } = props;
	const theme = React.useMemo(() => {
		return disableCustomTheme
			? {}
			: createTheme({
					// For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
					cssVariables: {
						colorSchemeSelector: 'data-mui-color-scheme',
						cssVarPrefix: 'template',
					},
					colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
					typography,
					shadows,
					shape,
					components: {
						...inputsCustomizations,
						...dataDisplayCustomizations,
						...feedbackCustomizations,
						...navigationCustomizations,
						...surfacesCustomizations,
						...themeComponents,
					},
			  });
	}, [disableCustomTheme, themeComponents]);
	if (disableCustomTheme) {
		return <React.Fragment>{children}</React.Fragment>;
	}
	return (
		<ThemeProvider defaultMode="light" theme={theme} disableTransitionOnChange>
			{children}
		</ThemeProvider>
	);
}
