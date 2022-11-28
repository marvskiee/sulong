The latest way to build apk 
* create eas.json then paste this
{
  "cli": {
    "version": ">= 2.7.1"
  },
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
}

* eas build -p android --profile preview
