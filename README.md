<p align="center">
  <img src="https://github.com/openforge/main-website/blob/master/src/assets/logo-openforge.png?raw=true"/>
</p>
<p align="center">
  <a href="http://www.openforge.io/">Official Website</a> |
  <a href="http://www.openforge.io/opportunities">Opportunities</a> |
  <a href="https://www.facebook.com/OpenForgeUS/">Facebook</a>
</p>

<h3 align="center">
  Leading By Example.
</h3>

<p align="center">
  Working with the latest technologies, designing the best products, and sharing our knowledge with the world wide community.
</p>

# OpenForge

The OpenForge Community is composed of team members and public contributors banded together for a common goal of leading by example.  We are experts in applying UI/UX and Software Architecture principles towards enhancing businesses nation (and world!) wide.

In addition to providing services for our clients; it is our belief that we should also focus on benefiting the community that surrounds us. For this reason; all OpenForge initiatives (that are not client related) are Open Sourced; including our design and business consulting resources which can be found on our Website at [www.openforge.io](http://openforge.io). 

If you are a community member who would like to take part of our paid (yes, we said PAID!) Open Source contributions please reach out to us via our [opportunities page](http://www.openforge.io/opportunities).   We also always encourage anyone to contribute to anything we are doing, and we hope to contribute to your projects as well!


# JuntoScope [![Build Status](https://travis-ci.org/openforge/JuntoScope.svg?branch=develop)](https://travis-ci.org/openforge/JuntoScope)
 
JuntoScope will help your team determine scopes for tasks in Teamwork.com© Projects more accurately, quickly, and efficiently to keep your projects within budget. Integrating with Teamwork Projects API, your team will be able to:

- Scope tasks anonymously and accurately without influence of others
- Determine team averages for scoped items to give the best estimate
- Allow team members to scope items easily through their mobile device
- Increase accuracy of scoped time for tasks within Teamwork Projects
- Prevent your team from going over scope
- Improve your ROI
- Decrease time spent scoping tasks

Stop wasting time estimating how long you think your team will need to complete Teamwork Tasks and get your accurate scope today!
 
 
## Getting Started
JuntoScope was made with love and care using [Ionic 3](https://github.com/ionic-team/ionic) :heart:

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater (we recommend < 8)
* Install the ionic CLI globally: `npm install -g ionic`
 
To run JuntoScope locally in a browser
```
ionic serve
```

:tada:
 
 
_Disclaimer: We do not have our Firebase keys environment configuration published in the repository! When attempting to run this project it will fail immediately. If you have your own firebase environment configuration that you would like to use, please consult the following instructions:_

* Create a a folder called config under the src folder. Add a file called config.ts to the newly created folder.
* Find your firebase credentials (apiKey, authDomain, databaseUrl, etc.), and copy the object into this file. It should look like this:

```
export const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
}
```

That's it! :tada:


 ## Versioning & Changelog	
We utilize [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) to generate a changelog from git metadata.	
 The following tools are used to achieve this purpose:	
- [commitizen](https://github.com/commitizen/cz-cli)	
- [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)	
- [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)	
 With the current configuration, after a developer stages their changes for a commit. They can use the following npm script to walk them through committing their changes.	
 ```	
npm run cz	
```	
 Read more about the commit guidelines [here](http://conventionalcommits.org/)	
 After all changes have been committed, a release and a changelog can be triggered by using the npm [version](https://docs.npmjs.com/cli/version) command. And the current configuration takes care of generating the changelog file based on git metadata.
 

## Download the App!
[<img src="https://github.com/openforge/main-website/blob/master/src/assets/graphic-google-googleplaystore.png?raw=true" />](https://play.google.com/store/apps/details?id=com.openforge.juntoscope&hl=en_US)

[<img src="https://github.com/openforge/main-website/blob/master/src/assets/graphic-apple-appstore.png?raw=true" />](https://itunes.apple.com/us/app/juntoscope/id1421846154?mt=8)
