// contentScript.js

const button = document.createElement('div');
button.innerHTML = `
<button class="btn rounded text-nowrap mx-1 px-md-4 d-none d-md-block btn-light"  type="button" data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas" aria-controls="myOffcanvas">
  Open Doc
</button>
`;

let train = document.querySelectorAll('[href="/listener/training/courses/"]');
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


    
    <div id="card" class="container-fluid card p-3 my-3" style="width:20rem; word-wrap: break-word;">
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
    <label for="url" class="form-label fw-semibold">
                Enter the URL of the Google Doc you want to open.
            </label>
      <input type="text" autofocus class="mx-4 mb-2 w-auto" id="url" placeholder="e.g. https://doc.google.com/..." required>
      <div class="col-12 mx-5" style="margin: auto;">
            <button class="btn btn-primary mx-5"" type="submit">Get Page</button>
        </div>
      </form>
    </div>

    <div class="mx-auto">
    <iframe class="mx-3" src="https://www.bing.com" id="docframe" height="550" width="680" style="border:none;"></iframe>
    </div>

  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

`; // Replace with your desired content

// // Add styles to the new div element
// newDiv.style.position = 'fixed';
// newDiv.style.top = '0';
// newDiv.style.left = '0';
// newDiv.style.width = '100%';
// newDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Replace with desired background color
// newDiv.style.color = '#fff'; // Replace with desired text color
// newDiv.style.padding = '10px';
console.log("Made");

// Append the new div element to the body of the active tab
document.body.insertBefore(offcanvas, document.body.firstChild);

// Execute the content script when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Create a new div element for the top of all content
  console.log("Inside");
  const topDiv = document.createElement('div');
  topDiv.innerHTML = '<h1>Top Content</h1>'; // Replace with your desired content

  // Add styles to the top div element
  topDiv.style.position = 'fixed';
  topDiv.style.top = '0';
  topDiv.style.left = '0';
  topDiv.style.width = '100%';
  topDiv.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Replace with desired background color
  topDiv.style.color = '#fff'; // Replace with desired text color
  topDiv.style.padding = '10px';
  topDiv.style.zIndex = '9999'; // Make it appear on top of other content

  // Append the top div element to the body of the active tab
  document.body.appendChild(topDiv);
});
