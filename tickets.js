// Get references to interactive elements
const visitDateInput = document.getElementById("date");//done
const durationDropdown = document.getElementById("durationSelect");
const guestsForm = document.querySelector(".guests");
const continueBtn = document.getElementById("continueBtn");
const fAdult=document.getElementById("foreignerAdult");
const fChild=document.getElementById("foreignerAdult")

const currentDateTable = document.getElementById("summaryDate");
const timeTable = document.getElementById("summaryTime");
const durationTable = document.getElementById("summaryDuration");
const guestTable = document.getElementById("summaryGuests");
const chargesTable = document.getElementById("summaryCharges");
const totalPayableTable = document.getElementById("summaryTotalPayable");


// add event listeners
visitDateInput.addEventListener("change", updateSummaryTable);
durationDropdown.addEventListener("change", updateSummaryTable);
guestsForm.addEventListener("input", updateSummaryTable);
  
// default date to the current date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;
visitDateInput.value = formattedDate;

//implement event listeners
function updateSummaryTable() {
  const selectedDate = visitDateInput.value;

  // Convert date to the correct format
  const [year, month, day] = selectedDate.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  currentDateTable.textContent = formattedDate;

  const selectedTime=durationDropdown.value;
  timeTable.textContent=selectedTime;

  
}
  






// Call the updateSummaryTable function once to set the initial summary table content
updateSummaryTable();