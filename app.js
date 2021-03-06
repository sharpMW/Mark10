const billAmount = document.querySelector("#bill-amount");
const paidAmount = document.querySelector("#paid-amount");
const checkButton = document.querySelector(".check");
const message = document.querySelector("#error-message");
const table = document.querySelector(".change-table");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateAmount() { 

    hideMessage();
    hideTable();
    if (billAmount.value > 0) { 
        if (Number(paidAmount.value) >= Number(billAmount.value)) { 
                const returnAmount = Number(paidAmount.value) - Number(billAmount.value);
                calculateChange(returnAmount);
                showTable();
                
        } else { 
            showMessage("Bill is not paid");
        }
    } else { 
        showMessage("Invalid Bill Amount!");
    }
});

function showMessage(msg) { 
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(returnAmount) { 
    for (let i = 0; i < availableNotes.length; i++) { 
        const numberOfNotes = Math.trunc( 
            returnAmount / availableNotes[i]
        );
        returnAmount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes; 
    }
}

function hideMessage() { 
    message.style.display = "none";
}
function hideTable() { 
    table.style.display = "none";
} 

function showTable() { 
    table.style.display = "block";
}