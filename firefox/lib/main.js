// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
var urls = [
  	"*.kickass.to",
  	"*.kickass.so",
  	"*.katproxy.com",

  	"*.extratorrent.cc",

  	"*.thepiratebay.se",
		"*.194.71.107.80",
		"*.8la2.com",
		"*.91.121.194.115:82",
		"*.alivebay.com",
		"*.argentinabay.info",
		"*.bay.dragonflame.org",
		"*.bay.piratenpartei.at",
		"*.baymirror.com",
		"*.bayproxy.li",
		"*.bayproxy.nl",
		"*.bayproxy.uk",
		"*.baytorrent.eu",
		"*.baytorrent.nl",
		"*.btor.org",
		"*.clonebay.ga",
		"*.daspirateproxy.ga",
		"*.deathbay.com",
		"*.denmarkbay.info",
		"*.dieroschtibay.org",
		"*.fastpiratebay.com",
		"*.finlandbay.info",
		"*.freetpb.cf",
		"*.germanybay.info",
		"*.greecebay.info",
		"*.helpamillionpeople.com",
		"*.ilikerainbows.co.uk",
		"*.indiabay.info",
		"*.indonesiabay.info",
		"*.iranbay.info",
		"*.irelandbay.info",
		"*.italybay.info",
		"*.kuiken.co",
		"*.labaia.in",
		"*.malaysiabay.info",
		"*.mobiletorrents.in",
		"*.mybay.biz",
		"*.netherlandsbay.info",
		"*.nobay.net",
		"*.norwaybay.info",
		"*.onlinetpb.webs.pm",
		"*.outlaw.is",
		"*.piraattilahti.org",
		"*.pirabay.come.in",
		"*.pirate-bay-proxy.com",
		"*.pirateahoy.eu",
		"*.piratebay.blackc.at",
		"*.piratebay.io",
		"*.piratebay.rocks",
		"*.piratebay.skey.sk",
		"*.piratebay1.com",
		"*.piratebayguru.com",
		"*.piratebayproxy.se",
		"*.pirateproxy.ca",
		"*.pirateproxy.net",
		"*.pirateproxy.nl",
		"*.pirateproxy.se",
		"*.pirateproxy.ws",
		"*.pirateshore.org",
		"*.pirproxy.com",
		"*.probay.in",
		"*.proxy.arrr.nl",
		"*.proxy.rickmartensen.nl",
		"*.proxybay.eu",
		"*.proxybay.xyz",
		"*.proxyduck.com",
		"*.proxypirate.eu",
		"*.proxytpb.nl",
		"*.saudiarabiabay.info",
		"*.scenerelease.com",
		"*.singaporebay.info",
		"*.smartpiratebay.com",
		"*.superbay.net",
		"*.suprbay.com",
		"*.swedenbay.info",
		"*.thebay.al",
		"*.thebay.ovh",
		"*.thebay.ws",
		"*.thebootlegbay.com",
		"*.themusicbay.com",
		"*.thepairatebay.net",
		"*.thepirate.al",
		"*.thepirate.me",
		"*.thepirate.pw",
		"*.thepiratebay.ar.com",
		"*.thepiratebay.asia",
		"*.thepiratebay.club",
		"*.thepiratebay.cr",
		"*.thepiratebay.de.com",
		"*.thepiratebay.gb.com",
		"*.thepiratebay.je",
		"*.thepiratebay.lv",
		"*.thepiratebay.mg",
		"*.thepiratebay.mine.nu",
		"*.thepiratebay.org.es",
		"*.thepiratebay.si",
		"*.thepiratebay.tn",
		"*.thepiratebay.uno",
		"*.thepiratebay2.se",
		"*.thepiratebeach.com",
		"*.thepirateboat.eu",
		"*.thepiratemirror.com",
		"*.thepirateproxy.ovh",
		"*.theproxypirate.com",
		"*.thevideobay.com",
		"*.thevirtualbay.net",
		"*.theweedbay.org",
		"*.torrentfiles.in",
		"*.torrentula.se",
		"*.tpb-proxy.com",
		"*.tpb.cryptostorm.is",
		"*.tpb.derp.pw",
		"*.tpb.exodica.com.ar",
		"*.tpb.genyaa.org",
		"*.tpb.ic0nic.de",
		"*.tpb.index.hm",
		"*.tpb.issavagegay.com",
		"*.tpb.jorritkleinbramel.nl",
		"*.tpb.k0nsl.org",
		"*.tpb.linuxthefish.net",
		"*.tpb.madfedora.site40.net",
		"*.tpb.ninja.so",
		"*.tpb.occupyuk.co.uk",
		"*.tpb.ovh",
		"*.tpb.par-anoia.net",
		"*.tpb.piraten.lu",
		"*.tpb.pirateparty.ca",
		"*.tpb.qwertyoruiop.com",
		"*.tpb.skit.org.ua",
		"*.tpb.tf",
		"*.tpb.thevoidgroup.co.uk",
		"*.tpb.torrentproxy.nl",
		"*.tpb.tv-shuffle.ch",
		"*.tpb.webi.pw",
		"*.tpbargentina.entrydns.org",
		"*.tpbproxy.me",
		"*.tpbt.org",
		"*.turkeybay.info",
		"*.tvbay.net",
		"*.uberproxy.net",
		"*.ukbay.info",
		"*.ukbay.org",
		"*.websiteproxies.co.uk",
		"*.www.battleit.ee/tpb",
		"*.www.bayproxy.com",
		"*.www.dieroschtibay.org",
		"*.www.piratehome.tk",
		"*.www.pirateshore.nl",
		"*.www.thepiratebay.gg",
		"*.www.thepiratebay.hk",
		"*.www.thepiratebay2.se",
		"*.zeroproxy.me"
  ];

var buttons = require('sdk/ui/button/action');
var ss = require("sdk/simple-storage");
var button = null;

if(ss.storage.enabled === undefined || (ss.storage.enabled !== undefined && ss.storage.enabled)) {
	button = buttons.ActionButton({
	  id: "tp-beacon",
	  label: "TP Beacon: On",
	  icon: {
	    "16": "./icons/beacon-16.png",
	    "32": "./icons/beacon-32.png",
	    "64": "./icons/beacon-64.png"
	  },
	  onClick: handleClick
	});
} else {
	button = buttons.ActionButton({
	  id: "tp-beacon",
	  label: "TP Beacon: Off",
	  icon: {
	    "16": "./icons/beacon-16-bw.png",
	    "32": "./icons/beacon-32-bw.png",
	    "64": "./icons/beacon-64-bw.png"
	  },
	  onClick: handleClick
	});
}

var topWorker = null;

function handleClick(state) {
	if(state.label == 'TP Beacon: On') {
		button.state("window", {
			"icon": {
		    "16": "./icons/beacon-16-bw.png",
		    "32": "./icons/beacon-32-bw.png",
		    "64": "./icons/beacon-64-bw.png"
		  },
		  label: "TP Beacon: Off"
	  });
	  ss.storage.enabled = false;
	} else {
		button.state("window", {
			"icon": {
		    "16": "./icons/beacon-16.png",
		    "32": "./icons/beacon-32.png",
		    "64": "./icons/beacon-64.png"
		  },
		  label: "TP Beacon: On"
	  });
	  ss.storage.enabled = true;
	}

	if(topWorker !== null) {
		topWorker.port.emit("tpb-toggle", button.state('window').label == 'TP Beacon: On');
	}
}

pageMod.PageMod({
  include: urls,
  contentScriptFile: [self.data.url("jquery.min.js"), self.data.url("piratebay.js")],
  contentScriptOptions: {
    arrowImg: self.data.url("img/arrows.png"),
    spinnerImg: self.data.url("img/spinner.gif"),
    urls: urls
  },
  onAttach: function(worker) {
  	topWorker = worker;
    topWorker.port.emit("tpb-toggle", button.state('window').label == 'TP Beacon: On');
  }
});
