document.addEventListener("DOMContentLoaded", function() {
    const feedbackInput = document.getElementById("feedback");
    const submitButton = document.getElementById("feedback-btn");

    submitButton.addEventListener("click", function() {
        const feedbackValue = feedbackInput.value;

        if (feedbackValue.trim() === "") {
            alert("Please enter your feedback before submitting.");
        } else {
           
            console.log("Feedback submitted:", feedbackValue);

            alert("Feedback submitted");
            
            feedbackInput.value = "";
        }
    });
});
