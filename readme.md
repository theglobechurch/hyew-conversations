# Have You Ever Wondered Conversations…

## Dev

- `npm install -g ionic`
- `npm install`
- `ionic serve`

## Test Build

Test on Android with: `ionic cordova run android`

## Publishing

1. Generate/Update icons: `ionic cordova resources ios --icon`

### Android ([Ionic Documentation](https://ionicframework.com/docs/v1/guide/publishing.html#android-publishing))

1. Build it: `ionic cordova build --release android`
2. Sign it: `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/path/to/key.jks ~/path/to/app.apk key`
3. Compress it: `zipalign -v 4 ~/path/to/app.apk hyew.apk`
4. [Upload and publish it](https://play.google.com/apps/publish).

### iOS ([Ionic Documentation](https://ionicframework.com/docs/v1/guide/publishing.html#ios-publishing))

1. Build it: `ionic cordova build ios --release`
2. Head over to Xcode
3. Check that Xcode is using Legacy Build Settings (File/Project Settings). ([Ref](https://stackoverflow.com/a/52654888))
4. Archive it (Product/Archive)
5. Upload it (Window/Organizer/Archives/Distribute App)
6. [Publish it](https://appstoreconnect.apple.com)
