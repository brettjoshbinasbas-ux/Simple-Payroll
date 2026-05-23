function calculatePayroll() {
  // 1. Get inputs
  const name = document.getElementById("employeeName").value;
  const hourlyRate = Number(document.getElementById("hourlyRate").value);
  const hoursWorked = Number(document.getElementById("hoursWorked").value);

  // Validation - make sure all fields are filled
  if (!name) {
    alert("Please enter Employee Name");
    return;
  }
  if (isNaN(hourlyRate) || hourlyRate <= 0) {
    alert("Please enter a valid Hourly Rate");
    return;
  }
  if (isNaN(hoursWorked) || hoursWorked <= 0) {
    alert("Please enter valid Hours Worked");
    return;
  }

  // 2. Compute gross pay (per payroll period)
  const grossPay = hourlyRate * hoursWorked;

  // 3. Convert to annual pay (for checking the threshold)
  const annualPay = grossPay * 12;

  // Hide both payslips first
  document.getElementById("paySlipExemption").classList.add("d-none");
  document.getElementById("paySlip").classList.add("d-none");

  // 4. Check the ₱250,000 rule
  if (annualPay < 250000) {
    // A) EXEMPT - annualPay < 250,000
    // Deductions are 0, net pay is just gross pay
    const netPay = grossPay;

    // Update exempt payslip fields
    document.getElementById("exemptName").textContent = name;
    document.getElementById("exemptGross").textContent = grossPay.toFixed(2);
    document.getElementById("exemptNet").textContent = netPay.toFixed(2);

    // Show the exempt payslip
    document.getElementById("paySlipExemption").classList.remove("d-none");
  } else {
    // B) WITH DEDUCTIONS - annualPay >= 250,000
    // Compute deductions
    const tax = grossPay * 0.2;      // 20% tax
    const sss = 750;
    const philHealth = 500;
    const pagIbig = 800;

    // Compute net pay
    const netPay = grossPay - tax - sss - philHealth - pagIbig;

    // Update regular payslip fields
    document.getElementById("regName").textContent = name;
    document.getElementById("regGross").textContent = grossPay.toFixed(2);
    document.getElementById("regTax").textContent = tax.toFixed(2);
    document.getElementById("regNet").textContent = netPay.toFixed(2);

    // Show the regular payslip
    document.getElementById("paySlip").classList.remove("d-none");
  }
}