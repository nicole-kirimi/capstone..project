const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><html><body><input id="feedback"><button id="feedback-btn">Submit</button></body></html>`);
const document = dom.window.document;
global.document = document;
global.window = dom.window;

require('./src/comm.js'); 

describe('Feedback form tests', () => {
    let feedbackInput;
    let submitButton;

    beforeEach(() => {
        feedbackInput = document.getElementById("feedback");
        submitButton = document.getElementById("feedback-btn");
    });

    test('should alert if feedback is empty', () => {
        feedbackInput.value = "";

        const alertMock = jest.spyOn(window, 'alert');

        submitButton.click();

        expect(alertMock).toHaveBeenCalledWith("Please enter your feedback before submitting.");
        alertMock.mockRestore();
    });

    test('should log feedback and clear input on submit', () => {
        const consoleLogMock = jest.spyOn(console, 'log');
        const alertMock = jest.spyOn(window, 'alert');

        feedbackInput.value = "This is my feedback";

        submitButton.click();

        expect(consoleLogMock).toHaveBeenCalledWith("Feedback submitted:", "This is my feedback");
        expect(alertMock).toHaveBeenCalledWith("Feedback submitted");
        expect(feedbackInput.value).toBe("");

    
    });
});

