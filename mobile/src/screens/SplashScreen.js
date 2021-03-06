import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnBoardingLogo';

export default class SplashScreen extends Component {
	state = {}

	componentDidMount() {
		this.checkAuth();
	}

	checkAuth = () => {
		setTimeout(() => {
			this.props.navigation.navigate('Auth')
		}, 2000)
	}

	render() {
		return (
			<Box f={1} center>
				<OnboardingLogo />
			</Box>
		);
	}
}
