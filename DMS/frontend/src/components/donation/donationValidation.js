function DonationValidation() {
  var donator = document.getElementById("donator").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var items = document.getElementById("items").value;
  var quantity = document.getElementById("quantity").value;
  var phone = document.getElementById("phone").value;

  if (donator.length < 5) {
    alert("Please enter a valid name");
    return false;
  }

  if (email.indexOf("@") === -1 || email.length < 6) {
    alert("Please enter a valid email");
    return false;
  }

  if (address.length > 3 && address.length < 20) {
    alert("Please enter a valid address");
    return false;
  }

  if ((items.length > 3) & (items.length < 20)) {
    alert("Please enter a valid items name");
    return false;
  }

  if (quantity >= 0) {
    alert("Please enter a valid quantity");
    return false;
  }

  if (isNaN(phone) || phone.length !== 10) {
    alert("Please enter a valid phone number");
    return false;
  }

  alert("Form Submitted Succesfully!");
  return true;
}

export default DonationValidation;
