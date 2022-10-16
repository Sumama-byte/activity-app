import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.learn2earn.activity',
  appName: 'Activity',
  webDir: 'www',
  bundledWebRuntime: false,
    plugins: {
  FirebaseAuthentication: {
    skipNativeAuth: false,
      providers: ["facebook.com", "google.com"],
  },
},
};

export default config;
