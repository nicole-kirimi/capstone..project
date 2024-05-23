document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.getElementById("orderButton");

    orderButton.addEventListener("click", () => {
        const caPackets = document.getElementById("ca-packets").value;
        const coPackets = document.getElementById("co-packets").value;
        const dPackets = document.getElementById("d-packets").value;
        const mPackets = document.getElementById("m-packets").value;

        const caPrice = 1500;
        const coPrice = 400;
        const dPrice = 500;
        const mPrice = 600;

        const caTotal = caPackets ? parseInt(caPackets) * caPrice : 0;
        const coTotal = coPackets ? parseInt(coPackets) * coPrice : 0;
        const dTotal = mPackets ? parseInt(dPackets) * dPrice : 0;
        const mTotal = mPackets ? parseInt(mPackets) * mPrice : 0;

        const totalAmount = caTotal + coTotal + dTotal + mTotal;

        alert(`Order successful! Total amount: Kshs.${totalAmount.toFixed(2)}`);
    });
});
