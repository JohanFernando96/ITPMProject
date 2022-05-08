function InventoryValidation() {
  var Organization = document.getElementById("Organization").value;
	var stretcher = document.getElementById("stretcher").value;
	var lifejacket = document.getElementById("lifejacket").value;
	var firstaid = document.getElementById("firstaid").value;
	var bucket = document.getElementById("bucket").value;
	var gloves = document.getElementById("gloves").value;
	var torchlight = document.getElementById("torchlight").value;
	var safetyhelmet  = document.getElementById("safetyhelmet").value;
	var readymadefood = document.getElementById("readymadefood").value;
	var others = document.getElementById("others").value;
  
    if (Organization.length < 5) {
      alert("Please enter a valid name");
      return false;
    }
  
    if (stretcher >= 0) {
      alert("Please enter a valid stretcher");
      return false;
    }

    if (lifejacket >= 0) {
        alert("Please enter a valid lifejacket");
        return false;
    }

    if (firstaid >= 0) {
      alert("Please enter a valid firstaid");
      return false;
    }
      
    if (bucket >= 0) {
      alert("Please enter a valid bucket");
      return false;
    }
    
    if (gloves >= 0) {
      alert("Please enter a valid torchlight");
      return false;
    }

    if (torchlight >= 0) {
      alert("Please enter a valid torchlight");
      return false;
    }

    if (safetyhelmet >= 0) {
      alert("Please enter a valid safetyhelmet");
      return false; 
    }

    if (readymadefood >= 0) {
      alert("Please enter a valid readymadefood"); 
      return false;
    }

    if (others >= 0) {
      alert("Please enter a valid others"); 
      return false;
    }
    alert("Form Submitted Succesfully!");
    return true;
  }
  
  export default InventoryValidation;
  