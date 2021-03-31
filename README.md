# zen-web-ext
Web extensions encapsulating Zenroom functionality

In order to test the web extension, we provide the test static file `index.html`. You need to serve this file from a local webserver, or if you want to host it somewhere else you need to replace `example.org` with that url in the file `manifest.json`.

## Build the web extension

In order to build a development version of the web extension, and save it to your Downloads directory, do the following:

```
$ cd zenextroom
$ npm install
$ cd zenpage
$ ./prepair_bundle.sh
$ cd ..
$ web-ext build --a ~/Downloads -n zenextroom.zip 
```

To install and configure the web extension in Firefox:

1. Browse to: about:debugging
2. Click "This Firefox" -> "Load temporary add-on"
3. Select the zenextroom.zip file in your Downloads directory
4. Browse to about:addons
5. Click on "..." -> preferences for the "zenextroom" addon

Fill in a username (not used at the moment), your public and private key, and click save.

To test if the configuration is correct, navigate to locahost:8000/request, and click on the extension; you should see two (or more) buttons: 'login' and 'sign'.

## Build a signed self-hosted web extension
To build a signed, downloadable self hosted version of the webextension:

`web-ext sign --api-key=<KEY> --api-secret=<SECRET> --channel=unlisted`

then copy the xpi file to the directory of your local web server.
