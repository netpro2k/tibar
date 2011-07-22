// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
  backgroundColor:'white'
});

// TODO: write your module tests here
var TiBar = require('tibar');
Ti.API.info("module is => "+TiBar);


var overlay = Ti.UI.createView({center:{x:0,y:0}, anchorPoint:{x:0,y:0},width: 320, height: 480});
var flex = Titanium.UI.createButton({systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE});
var cancelBtn = Ti.UI.createButton({title: 'Cancel', style: Ti.UI.iPhone.SystemButtonStyle.BAR});
cancelBtn.addEventListener('click', function(){
	TiBar.closeScanner();
})
var titleLbl = Ti.UI.createLabel({text:"Scan Barcode", font:{fontSize: 16, fontWeight: 'bold'}, shadowColor:'#080808', shadowOffset:{x:0,y:-1}, textAlign: 'center', color: 'white', width:'auto'});
var infoBtn = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT
})
infoBtn.addEventListener('click', function(){
	try{
		TiBar.showHelp();
	} catch(e) {
		alert(e);
	}
})
overlay.add(Ti.UI.createView({top: 146, height:1, backgroundColor:'white', opacity: 0.5}));
overlay.add(Ti.UI.createView({top: 292, height:1, backgroundColor:'white', opacity: 0.5}));
overlay.add(Ti.UI.createView({left: 106, width:1, backgroundColor:'white', opacity: 0.5}));
overlay.add(Ti.UI.createView({left: 212, width:1, backgroundColor:'white', opacity: 0.5}));

overlay.add(Ti.UI.createToolbar({items:[cancelBtn, flex, titleLbl, flex, flex, infoBtn], height: 43, bottom: 0}));

TiBar.init({
       // simple configuration for iPhone simulator
       configure: {
           classType: "ZBarReaderViewController",
           sourceType: "Camera",
           cameraMode: "Default",
           config:{
               "showsHelpOnFail":false,
               "showsCameraControls":false, // (VC)
               "showsZBarControls":false,
               "tracksSymbols":true // the tracking rectangle that highlights barcodes
           },
	overlay: overlay,
           symbol:{
               "QR-Code":true,
               "CODE-128":false,
               "CODE-39":false,
               "I25":false,
               "DataBar":false,
               "DataBar-Exp":false,
               "EAN-13":true,
               "EAN-8":true,
               "UPC-A":true,
               "UPC-E":true,
               "ISBN-13":true,
               "ISBN-10":false,
               "PDF417":false
           }
       },
		success:function(data){
			Ti.API.info('TiBar success callback!');
		}
	});

try {
	var scanBtn = Ti.UI.createButton({title: "Scan", height: 40, width: 100});
	scanBtn.addEventListener('click', function(){
		TiBar.scan();
	})
	window.add(scanBtn);
	window.open();
} catch(e) {
	alert(e);
}
