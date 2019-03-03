# Have You Ever Wondered Conversations…

## Dev

- `npm install -g ionic`
- `npm install`
- `ionic serve`

## Test Build

Test on Android with: `ionic cordova run android`

## Publishing

### Android ([Ionic Documentation](https://ionicframework.com/docs/v1/guide/publishing.html#android-publishing))

1. Build it: `ionic cordova build --release android`
2. Sign it: `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/path/to/key.jks ~/path/to/app.apk key`
3. Compress it: `zipalign -v 4 ~/path/to/app.apk hyew.apk`
4. [Upload and publish it](https://play.google.com/apps/publish).

### iOS ([Ionic Documentation](https://ionicframework.com/docs/v1/guide/publishing.html#ios-publishing))

1. Build it: `ionic cordova build ios --release`
2. Open Xcode and archive it (Product/Archive)
3. Upload it (Window/Organizer/Archives/Distribute App)
4. [Publish it](https://appstoreconnect.apple.com)
