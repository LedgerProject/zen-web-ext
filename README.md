# zen-web-ext
Web extensions encapsulating Zenroom functionality

In order to test the web extension, we provide the test static file `index.html`. You need to serve this file from a local webserver (please access is as `localhost:<your port>`, the port does not matter for the web extension).

If you want to host it somewhere else you need to replace `example.org` with that url in the file `manifest.json`.
The page refers to a non-existing form url `http://localhost/check_login/` just to show the functionality of the web extension in enabling and disabling the login button and signing the challenge contained as hidden field in the page (you can inspect the html code to see how it works).

## Build the web extension

In order to build a development version of the web extension, clone this repo (or save it to your Downloads directory) and do the following:

### Build environment

```
$ cd zen-web-ext
$ cd zenextroom
$ npm install
$ cd zenpage
$ npm install -g browserify
$ ./prepair_bundle.sh
$ cd ..
$ npm install -g web-ext 
$ web-ext build --a . -n zenextroom.zip 
```
### Install web extension

1. Browse to: about:debugging
2. Click "This Firefox" -> "Load temporary add-on"
3. Select the zenextroom.zip file in your Downloads directory
4. Browse to about:addons
5. Click on "..." -> preferences for the "zenextroom" addon

Alternatively, after Build environment you can run the following command in the web extension root directory:
```
web-ext --verbose run
```
This will launch an instance of Firefox with the web extension installed (please note that this session is not permanent, everything is wiped out upon exit).

### Configure web extension
Fill in a username (not used at the moment), your public and private key, and click save.

### Test web extension
To test if the configuration is correct, navigate to locahost:<your port>, and click on the extension; you should see two buttons: 'login' and 'sign'. At the moment only sing is demonstrated by the example page `index.html`.

## Build a signed self-hosted web extension
To build a signed, downloadable self hosted version of the webextension:

`web-ext sign --api-key=<KEY> --api-secret=<SECRET> --channel=unlisted`

then copy the xpi file to the directory of your local web server.
