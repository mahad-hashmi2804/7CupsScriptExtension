# 7CupsScriptExtension
Chrome based browser extension specifically designed for Discussion Hosts on 7 Cups so they can have their discussion script and the chatroom open in the same tab and don't have to switch back and forth all the time.

This extension was developed specifically for 7 Cups and will not work on other sites without tweaking the code. <br>
Feel free to reach out to me at mahad.python@gmail.com if you want compatability with another site.<br>
This extension is developed for Chromium-based browsers and may not work on others.<br>

The only function of this extension is to display a Google Doc webpage inside of a BootStrap OffCanvas so Discussion Hosts on 7 Cups can have their scripts and chats in the same tab.


# Installation
Since this extension is not on the Chrome Web Store, browsers will not allow this to be installed via a simple .crx, single-file installer.
You will have to use this extension in developer mode.

Here are the steps to instal it:<br>
  1.) Download ALL 4 of the files: https://github.com/mahad-hashmi2804/7CupsScriptExtension/archive/refs/heads/main.zip<br>
  2.) Unzip the ZIP file and store all the files in a separate folder containing nothing but these 4 files.<br>
  3.) Open up your browser and go to chrome://extensions<br>
  4.) Flip on the "Developer Mode" switch.<br>
  5.) Click on the button labeled "Load Unpacked"<br>
  6.) A file explorer window will open. Navigate to the folder you stored the downloaded files in and click "Select folder".<br>
  7.) Voila! Your extension should be installed. Check it out by going to https://www.7cups.com/dashboard<br>


 # Usage
 Using the extension is very easy. <br>
 
 In the top left of the page, you should see a "Open Script" button. <br>
 Clicking it will reveal an offcanvas (a sliding tab that can be hidden into the side of your screen).<br>
 In the offcanvas, there should be a input form with one text input box and one button labeled "Get Page". <br>
 There should also be an iframe (a mini web page within your web page) that by default displays https://www.bing.com.<br>
 To access a script, get the FULL URL of the Google Doc (https://docs.google.com/document/...), and enter the URL into the text input box.<br>
 When you hit the "Get Page" button, it should bring up the required document.<br>
 
 If you encounter any bugs or problems, please report them to me at mahad.python@gmail.com as it helps me make this a better and more stable program. Thank you!