import Constants from 'expo-constants';
import * as Facebook from 'expo-facebook';

const permissions = ['public_profile', 'email'];

const loginAsync = async () => {
    try {
        await Facebook.initializeAsync(Constants.manifest.facebookAppId, "Instore")
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(Constants.manifest.facebookAppId, { permissions });

        if (type === 'success') {
            return Promise.resolve(token)
        }

        return Promise.reject('Not successful')
    } catch(error) {
        return Promise.reject(error)
    }
}

export const FacebookApi = {
    loginAsync
}