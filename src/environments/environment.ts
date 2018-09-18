

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	isMockEnabled: true, // You have to switch this, when your real back-end is done
	firebase: {
		apiKey: 'AIzaSyDg7S2kUR0vLBUcoHt-GXa_RO9luj3-xQk',
		authDomain: 'XXX',
		databaseURL: 'https://loyalapp-1534785271581.firebaseio.com',
		projectId: 'loyalapp-1534785271581',
		storageBucket: 'XXX',
		messagingSenderId: 'XXX'
	}
};
