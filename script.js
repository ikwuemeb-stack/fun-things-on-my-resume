function calculateSalary() {
    let wage = document.getElementById("wage").value;
    let hours = document.getElementById("hours").value;

    wage = parseFloat(wage);
    hours = parseFloat(hours);

    if (isNaN(wage) || isNaN(hours)) {
        document.getElementById("output").innerHTML =
            "Please enter valid numbers.";
        return;
    }

    let yearlySalary = wage * hours * 52;

    document.getElementById("output").innerHTML =
        "Your yearly salary is $" + yearlySalary.toFixed(2);
}