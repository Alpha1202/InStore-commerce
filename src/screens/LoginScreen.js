import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnBoardingLogo';
import { TouchableOpacity, Alert, Animated } from 'react-native';
import LoginButton from '../commons/LoginButton';

export default class LoginScreen extends Component {
	state = {
		opacity: new Animated.Value(0),                             
		position: new Animated.Value(0)
	};

	componentDidMount() {
		Animated.parallel([ this.opacityAnim(), this.positionAnim() ]).start();
	}

	opacityAnim = () => {
		Animated.timing(this.state.opacity, {
			toValue: 1,
			duration: 200,
			delay: 100
		}).start();
	};

	positionAnim = () => {
		Animated.timing(this.state.position, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true
		}).start();
	};
	onGooglePress = () => {
		Alert.alert('Google press');
	};

	onFacebookPress = () => {
		Alert.alert('Facebook press');
	};
	render() {
		const { opacity } = this.state;

		const logoTranslate = this.state.position.interpolate({
			inputRange: [ 0, 1 ],
			outputRange: [ 150, 0 ]
		});
		return (
			<Box f={1} center bg="white">
				<Animated.View
					style={{
						flex: 1,
						transform: [
							{
								translateY: logoTranslate
							}
						]
					}}
				>
					<Box f={1} center>
						<OnboardingLogo />
					</Box>
				</Animated.View>

				<Animated.View style={{ flex: 0.9, width: '100%', opacity }}>
					<LoginButton onPress={this.onGooglePress} type="google">
						Continue with Google
					</LoginButton>
					<LoginButton onPress={this.onFacebookPress} type="facebook">
						Continue with Facebook
					</LoginButton>
				</Animated.View>
			</Box>
		);
	}
}
