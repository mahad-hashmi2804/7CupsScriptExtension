// contentScript.js

const button = document.createElement('div');
button.innerHTML = `
<button class="btn rounded text-nowrap mx-1 px-md-4 d-none d-md-block btn-light" style="" type="button" data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas" aria-controls="myOffcanvas">
  Open Script
</button>
`;

let train = document.querySelectorAll('[href="/"]');
let trainA = train[0];
trainA.after(button);

// Create a new div element
const offcanvas = document.createElement('div');
offcanvas.innerHTML = `


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <div class="offcanvas offcanvas-start" style="width: 50rem;" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title mx-auto" id="offcanvasExampleLabel" style="text-align: center;">Script Tab</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">


    
    <div id="card" class="container-fluid card p-3 mb-3" style="width:27rem; word-wrap: break-word;">
        <script>
    function processSubmit () {
      console.log("Processing");
  var urlInput = document.getElementById("url");
  var docframe = document.getElementById("docframe");
  docframe.attr('src', urlInput.value);
  var card = document.createElement("card");
  card.after(docframe);
  docframe.reload();
  return false;
}

    </script>
    <form onsubmit='event.preventDefault(); console.log("Processing");
  var urlInput = document.getElementById("url");
  var docframe = document.getElementById("docframe");
  docframe.src = urlInput.value;
  var card = document.createElement("card");
  card.after(docframe);
  docframe.reload();
  return false;'>
    <label for="url" class="form-label fw-semibold" style="text-align: center;">
                Enter the URL of the Google Doc you want to open. <br>(Make sure to enter the full URL starting from https://)
            </label>
      <input type="text" autofocus class="mx-4 mb-2" style="width: 325px;" id="url" placeholder="e.g. https://doc.google.com/..." required>
      <div class="mx-5">
      <div class="mx-5">
            <button class="btn btn-primary mx-5"" type="submit">Get Page</button>
            </div>
        </div>
      </form>
    </div>

    <div class="mx-auto">
    <iframe class="mx-3" src="https://www.bing.com" id="docframe" height="530" width="680" style="border:none;"></iframe>
    </div>

  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

`; 
console.log("Made");

// Append the new div element to the body of the active tab
document.body.insertBefore(offcanvas, document.body.firstChild);
