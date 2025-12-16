const API_URL = "https://in3.dev/inv/";
const VAT_RATE = 0.21;

fetch(API_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        // Invoice meta
        document.getElementById("number").innerText = data.number;
        document.getElementById("date").innerText = data.date;
        document.getElementById("due").innerText = data.due_date;

        // Companies
        document.getElementById("seller").innerHTML = formatCompany(data.company.seller);
        document.getElementById("buyer").innerHTML = formatCompany(data.company.buyer);

        // Items
        const tbody = document.getElementById("items");
        let subtotal = 0;

        for (let i = 0; i < data.items.length; i++) {
            const item = data.items[i];

            const base = item.quantity * item.price;
            let discountAmount = 0;
            let discountText = "-";

            if (item.discount && item.discount.type === "percentage") {
                discountAmount = base * item.discount.value / 100;
                discountText = "-" + item.discount.value +
                    "% (-" + discountAmount.toFixed(2) + " €)";
            }

            if (item.discount && item.discount.type === "fixed") {
                discountAmount = item.discount.value;
                discountText = "- " + discountAmount.toFixed(2) + " €";
            }

            const lineTotal = base - discountAmount;
            subtotal += lineTotal;

            tbody.innerHTML +=
                "<tr>" +
                "<td>" + item.description + "</td>" +
                "<td>" + item.quantity + "</td>" +
                "<td>" + item.price.toFixed(2) + " €</td>" +
                "<td>" + discountText + "</td>" +
                "<td>" + lineTotal.toFixed(2) + " €</td>" +
                "</tr>";
        }

        // Shipping
        subtotal += data.shippingPrice;
        tbody.innerHTML +=
            "<tr>" +
            "<td colspan='4'><strong>Transporto išlaidos</strong></td>" +
            "<td>" + data.shippingPrice.toFixed(2) + " €</td>" +
            "</tr>";

        // Totals
        const vat = subtotal * VAT_RATE;
        const total = subtotal + vat;

        document.getElementById("subtotal").innerText = subtotal.toFixed(2) + " €";
        document.getElementById("vat").innerText = vat.toFixed(2) + " €";
        document.getElementById("total").innerText = total.toFixed(2) + " €";
    });

function formatCompany(c) {
    return c.name + "<br>" +
        c.address + "<br>" +
        "Company code: " + c.code + "<br>" +
        "VAT code: " + c.vat + "<br>" +
        "Phone: " + c.phone + "<br>" +
        "Email: " + c.email;
}
