/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8081,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	  	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "bottom_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url:"https://www.calendarlabs.com/2023-hindu-calendar"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "a05532009ae1d6c2011ca0d24607a7b7"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "a05532009ae1d6c2011ca0d24607a7b7"
			}
		},
		{
			module: "newsfeed",
			position: "top_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
 		 {
      module: "MMM-Moon",
      position: "top_left",
      config: {
        lat: 20.545,
        lon: -67.420,
        timezone: "Europe/Paris"
      }
    },
{
			module: "MMM-MoonPhase",
			position: "top_center",
			config: {
				updateInterval: 43200000,
				hemisphere: "N",
				resolution: "detailed",
				basicColor: "white",
				title: true,
				phase: true,
                		size: 200,
				moonAlign: "center",
                		textAlign: "center",
				alpha: 0.7,
                		riseAndSet: {
		                    display: false,
		                    lon: -80.0,
		                    lat: 40.0,
		                    gmtOffset: -3.0
		                }
			}
		},
		{
		module: 'MMM-Globe',
		position: 'lower_third',	// This can be any of the regions. Best results in lower_third
		config: {
                size:"medium", // Globe size. See configuration options below for more options
                dayLength: 38, // (Optional) Rotation speed. See configuration options below
                viewAngle: 15, // (Optional) Globe tilt. See configuration options below.
                locations: [ 
                    // Fill with location Objects if desired
                    // e.g.
                    // {lat:37.77493,lng:-122.41942, label: "San Francisco"},
                    // {lat:-23.5475,lng:-46.63611, label: "Sao Paulo"}
                    
                    // Individual values must be seperated by a comma. 
                    // You can look up the latitude and longitude for a specific location on Google Maps.
                ]
		}
	},
	{
    module: 'MMM-EasyBack',
    position: 'fullscreen_below',
    config: {
        //bgName: "Example.jpg",   // "Example.jpg", the file name of your background image (case sensitive)
        videoName: "blur_and_huge_stars_rotate_motion_glittering_particles_slow_faded_on_dark_red_screen_background.mp4",       // "baboon.mp4",         // file name of your local video
        youTubeID: "", //"SkeNMoDlHUU", // "So3vH9FY2H4", // ID from any YouTube video. ID comes after the = sign of YouTube url
        height: "1080px",    // your display's resolution in pixels. Enter in config.js
        width: "1920px",     // your display's resolution in pixels. Enter in config.js
    }
},

	
{
  disabled: false,
  module: "MMM-Selfieshot",
  position: "bottom_left",
  config: {
    displayButton: "portrait",
    storePath: "./photos",
    
		width:1280,
		height:720, // In some webcams, resolution ratio might be fixed so these values might not be applied.
		quality: 100, //Of course.
		//device: null, // For default camera. Or
		device: "USB Camera",
		shootMessage: "Smile!",
		shootCountdown: 5,
		displayCountdown: true,
		displayResult: true,
		playShutter: true,
		shutterSound: "shutter.mp3",
		useWebEndpoint: "selfie", // It willl become `https://YOUR_MM_IP_OR_DOMAIN::PORT/selfie`
		resultDuration: 1000 * 5,
		sendTelegramBot: true,

      }
},

{
    module: "MMM-IronManGIF",
    position: "bottom",
    config: {
        style: 7,              // Style number
        maxWidth: "100%",      // Sizes the images. 
        rotate: false,         // Rotate through images
        updateInterval: 30000  // Interval between image rotations (30 seconds)
    }
},
					
	{
			module: "MMM-KeyBindings",
			config: {
				evdev: { enabled: false },
				enableKeyboard: true
			}
		},
		
    {
    module: "MMM-Formula1",
    position: "center",
    header: "F1 Standings",
    config: {
      // Optional configuration options - see https://github.com/ianperrin/MMM-Formula1#configuration-options
    }
  },
  {
    module: "MMM-wiki",
    position: "top",
    config: {
        updateInterval: 30000,
        language: "en",
        characterLimit: 500,
        category: "DidYouKnow",
        badTitles: [
            "Graphical",
            "timeline",
            "List"
        ],
        badContents: [
            "This article",
            "See also",
            "redirects here",
            "The following outline",
            "may refer to"
        ],
    }
},
 {
			module: "MMM-OnSpotify",
			position: "bottom_left", /* bottom_left, bottom_center */ 
			config: {
				clientID: "db28e4df251d4be5a4f16f8df0a9407d",
				clientSecret: "845205aecc6347a3a9ae760c749a6256",
				accessToken: "BQCI7KHtfexJapqzHafU0gsOaroeQ2uXFeoQK4CnAmhpG80Of-ZJLES4xvUlY-8Bg_-aVFzbHf87-U-T-vWN8Rz9UUDkZCUdhrCPkPWtO9_A49xcr37wT04Oxoiz7szxgLV0uP18iv_ysUEv9btSWpi_kVrTIzkAuGyh3fIDN-PfRoJb77Tr3gLHeLHXynQbrw7bNhm-CJy_uHVds-m6Ja7UzVhLCg",
				refreshToken: "AQBzE_MS8MFVyy3axyEqwvuJtg861eWlHY215RVIyN-hRoGIaMQck9-3hxo6TzGXMkB_T2fi3-DkiLApOHxsCKxrNbYJfz2ngoFXM8wpIsNeJU1zwjrHKghBXNlrwYIBQwM",
				advertisePlayerTheme: true,
        			displayWhenEmpty: "both",
        			userAffinityUseTracks: false,
        prefersLargeImageSize: false,
        hideTrackLenghtAndAnimateProgress: false,
        showDebugPalette: true,
        userDataMaxAge: 14400,
        userAffinityMaxAge: 36000,
        // Update intervals [SEE BELOW]
        isPlaying: 1,
        isEmpty: 2,
        isPlayingHidden: 2,
        isEmptyHidden: 4,
        onReconnecting: 4,
        onError: 8,
        // Animations [SEE BELOW]
        mediaAnimations: false,
        fadeAnimations: false,
        textAnimations: true,
        transitionAnimations: true,
        // Spotify Code (EXPERMIENTAL)
        spotifyCodeExperimentalShow: true,
        spotifyCodeExperimentalUseColor: true,
        spotifyCodeExperimentalSeparateItem: true,
        // Theming General
        roundMediaCorners: true,
        roundProgressBar: true,
        showVerticalPipe: true, 
        useColorInProgressBar: true,
        useColorInTitle: true,
        useColorInUserData: true,
        showBlurBackground: true,
        blurCorrectionInFrameSide: true,
        blurCorrectionInAllSides: true,
        alwaysUseDefaultDeviceIcon: true,
        experimentalCSSOverridesForMM2: false, // [SEE BELOW]			
        }
		},
		{
  module: "MMM-Face-Recognition-SMAI",
  position: "top_right",
  config: {
    //prompt: "Put in your own text"
  }
  
  
},
				{
			module: "MMM-Carousel",
			position: "bottom_bar", // Required only for navigation controls
			config: {
				transitionInterval: 100000,
				//ignoreModules: ['compliments'],
				mode: "slides",
				showPageIndicators: true,
				showPageControls: true,
				slides: {
					main: ["clock", "weather", "compliments","MMM-OnSpotify","MMM-Face-Recognition-SMAI"],
					"Slide 2": ["newsfeed",,'MMM-Globe','MMM-Hello-Mirror','MMM-Hello-Mirror'],
					"Slide 3": ["MMM-Formula1","MMM-IronManGIF","MMM-wiki"],
					"Slide 5": ["MMM-Selfieshot"],
					"Slide 6": ["MMM-EasyBack"],
				},
				keyBindings: {
					enabled: true,
					enableKeyboard: true,
					mode: "DEFAULT",
					map: {
						NextSlide: "ArrowRight",
						PrevSlide: "ArrowLeft",
						Slide0: "Home"
					}
				}
			}
		}
		
	]
	
	};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}

