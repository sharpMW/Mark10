const billAmount = document.querySelector("#bill-amount");
const paidAmount = document.querySelector("#paid-amount");
const checkButton = document.querySelector(".check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateAmount() { 

    hideMessage();
    if (billAmount.value > 0) { 
        if (paidAmount.value >= billAmount.value) { 
                const returnAmount = paidAmount.value - billAmount.value;
                calculateChange(returnAmount);
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