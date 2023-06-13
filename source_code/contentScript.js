// contentScript.js

// The button which toggles the offcanvas
const button1 = document.createElement('div');
button1.innerHTML = `
<button class="btn rounded text-nowrap mx-1 px-md-4 d-none d-md-block btn-light" style="" type="button" data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas" aria-controls="myOffcanvas">
  Open Script
</button>
`;

const button2 = document.createElement('div');
button2.innerHTML = `
<button class="btn rounded text-nowrap mx-1 px-md-4 d-none d-md-block btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#clipOffcanvas" aria-controls="clipOffcanvas">
  Open Clipboard
</button>
`;

// Placing the button right after the "Home" button on the navbar
let home = document.querySelectorAll('[href="/"]');
let homeA = home[0];
homeA.after(button1);

let notif = document.getElementById('header-notifications');

notif.before(button2);

// The actual offcanvas
const offcanvas = document.createElement('div');

// Now this next part is a nightmare, I know, but I'll walk you through it.
// This is in such a horrible manner because I really don't know much JS, 
// I just worked with what I did know.

// So the first line here is bootstrap JS for the offcanvas
// After that comes the first div, meaning the actual offcanvas.
offcanvas.innerHTML = `

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<div class="offcanvas offcanvas-end" style="width: 30rem;" tabindex="-1" id="clipOffcanvas" aria-labelledby="clipOffcanvasLabel">

<! This is the header for the offcanvas >

  <div class="offcanvas-header">
    <h5 class="offcanvas-title mx-auto" id="clipOffcanvasLabel" style="text-align: center;">Clipboard</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  
  <! Here starts the offcanvas body content. >

  <div class="offcanvas-body">

    <div class="container-fluid card p-3 mb-3" style="width:27rem; word-wrap: break-word;">

      <form onsubmit="event.preventDefault();

                      let text = document.getElementById('cliptext');
                      let msg = text.value;

                      console.log('New clipboard entry' + msg);

                      var item = document.createElement('div');
                      item.class = 'container-fluid card p-3 mb-3';

                      let mid = 'msgBody';
                      item.onclick = 'let msgBody = document.getElementByName('+ mid +')[0];
                                      msgBody.value += msg;
                                      let oc = document.getElementById('+'clipOffcanvas'+');
                                      oc.hide();';
                      item.innerHTML = msg;

                      let chil = document.getElementById('chil');
                      chil.before(item);
                      
                      return false;
                      ">

        <! Now here starts the content within the form. >

        <label for="cliptext" class="form-label fw-semibold" style="text-align: center;">
            Enter your text.
        </label>

        
        <! Text input for the URL >

        <input type="text" autofocus class="mx-4 mb-2" style="width: 325px;" id="cliptext" placeholder="Some text you wanna store" required>

        
        <! Submit button. Don't ask why it's in 2 divs >

        <div class="mx-5">
          <div class="mx-5">
            <button class="btn btn-primary mx-5"" type="submit">Get Page</button>
          </div>
        </div>

      </form>

    </div>

    <div class="container-fluid p-3 mb-3">

    <div id="chil"></div>

    </div>
  
  </div>

</div>


<div class="offcanvas offcanvas-start" style="width: 50rem;" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasExampleLabel">


  <! This is the header for the offcanvas >

  <div class="offcanvas-header">
    <h5 class="offcanvas-title mx-auto" id="offcanvasExampleLabel" style="text-align: center;">Script Tab</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  
  <! Here starts the offcanvas body content. >

  <div class="offcanvas-body">

    
    <! This is a card that holds the form. >

    <div id="card" class="container-fluid card p-3 mb-3" style="width:27rem; word-wrap: break-word;">
        
      
      <! Here is the form. I wrote the entire JS in the 
      onsubmit because I tried making a function in a script
      tag but it just wasn't working so here we are. >
      
      <! The JS basically just takes the value of the url input field, 
      adds it to the source attribute of the iframe and reloads the iframe >

      <form onsubmit='event.preventDefault(); console.log("Processing");
                      var urlInput = document.getElementById("url");
                      var docframe = document.getElementById("docframe");
                      docframe.src = urlInput.value;
                      
                      docframe.reload();
                      return false;'>

      
        <! Now here starts the content within the form. >

        <label for="url" class="form-label fw-semibold" style="text-align: center;">
            Enter the URL of the Google Doc you want to open. <br>(Make sure to enter the full URL starting from https://)
        </label>

        
        <! Text input for the URL >

        <input type="text" autofocus class="mx-4 mb-2" style="width: 325px;" id="url" placeholder="e.g. https://doc.google.com/..." required>

        
        <! Submit button. Don't ask why it's in 2 divs >

        <div class="mx-5">
          <div class="mx-5">
            <button class="btn btn-primary mx-5"" type="submit">Get Page</button>
          </div>
        </div>
      </form>
    </div>

    
    <! Here we have the iframe >

    <div class="mx-auto">
      <iframe class="mx-3" src="" id="docframe" height="530" width="680" style="border:none;"></iframe>
    </div>

  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

`; 

// This is just adding the entire offcanvas to the page.
document.body.insertBefore(offcanvas, document.body.firstChild);


// If you know of a better, more readable way to do this, please let me know.
// Feel free to email me at mahad.python@gmail.com
