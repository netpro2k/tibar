Tibar Barcode Module
====================

Tibar is barcode module for iPhone using Zbar and a fork of the project hosted at http://code.google.com/p/tibar and licensed under the LGPL. Please consult the original authors if you have integration questions. 


PREREQUISITES
-------------

* Titanium Mobile SDK 1.4.2
* iOS SDK 4.1
* iPhone 3GS or higher


INSTALL BUILT MODULE
--------------------
copy into /Library/Application\ Support/Titanium folder


ADD MISSING FRAMEWORKS IN YOUR PROJECT
--------------------------------------

* AVFoundation.framework
* CoreMedia.framework
* CoreVideo.framework
* QuartzCore.framework
* libiconv.dylib


REGISTERING THE MODULE
----------------------

Register your module with your application by editing `tiapp.xml` and adding your module.
Example:

<modules>
	<module version="0.x.x">tibar</module>
</modules>


USING YOUR MODULE IN YOUR CODE
------------------------------

To use your module in code, you will need to require it. 

For example,

	var my_module = require('tibar');
	my_module.foo();


Refer to ZBar-Integration.pdf for more details