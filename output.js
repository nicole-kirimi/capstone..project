/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n    const orderButton = document.getElementById(\"orderButton\");\n\n    orderButton.addEventListener(\"click\", () => {\n        const caPackets = document.getElementById(\"ca-packets\").value;\n        const coPackets = document.getElementById(\"co-packets\").value;\n        const dPackets = document.getElementById(\"d-packets\").value;\n        const mPackets = document.getElementById(\"m-packets\").value;\n\n        const caPrice = 1500;\n        const coPrice = 400;\n        const dPrice = 500;\n        const mPrice = 600;\n\n        const caTotal = caPackets ? parseInt(caPackets) * caPrice : 0;\n        const coTotal = coPackets ? parseInt(coPackets) * coPrice : 0;\n        const dTotal = mPackets ? parseInt(dPackets) * dPrice : 0;\n        const mTotal = mPackets ? parseInt(mPackets) * mPrice : 0;\n\n        const totalAmount = caTotal + coTotal + dTotal + mTotal;\n\n        alert(`Order successful! Total amount: $${totalAmount.toFixed(2)}`);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtEQUFrRCx1QkFBdUI7QUFDekUsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWtlcnkvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyQnV0dG9uXCIpO1xuXG4gICAgb3JkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FQYWNrZXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYS1wYWNrZXRzXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb1BhY2tldHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvLXBhY2tldHNcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRQYWNrZXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkLXBhY2tldHNcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG1QYWNrZXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtLXBhY2tldHNcIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgY2FQcmljZSA9IDE1MDA7XG4gICAgICAgIGNvbnN0IGNvUHJpY2UgPSA0MDA7XG4gICAgICAgIGNvbnN0IGRQcmljZSA9IDUwMDtcbiAgICAgICAgY29uc3QgbVByaWNlID0gNjAwO1xuXG4gICAgICAgIGNvbnN0IGNhVG90YWwgPSBjYVBhY2tldHMgPyBwYXJzZUludChjYVBhY2tldHMpICogY2FQcmljZSA6IDA7XG4gICAgICAgIGNvbnN0IGNvVG90YWwgPSBjb1BhY2tldHMgPyBwYXJzZUludChjb1BhY2tldHMpICogY29QcmljZSA6IDA7XG4gICAgICAgIGNvbnN0IGRUb3RhbCA9IG1QYWNrZXRzID8gcGFyc2VJbnQoZFBhY2tldHMpICogZFByaWNlIDogMDtcbiAgICAgICAgY29uc3QgbVRvdGFsID0gbVBhY2tldHMgPyBwYXJzZUludChtUGFja2V0cykgKiBtUHJpY2UgOiAwO1xuXG4gICAgICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gY2FUb3RhbCArIGNvVG90YWwgKyBkVG90YWwgKyBtVG90YWw7XG5cbiAgICAgICAgYWxlcnQoYE9yZGVyIHN1Y2Nlc3NmdWwhIFRvdGFsIGFtb3VudDogJCR7dG90YWxBbW91bnQudG9GaXhlZCgyKX1gKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;