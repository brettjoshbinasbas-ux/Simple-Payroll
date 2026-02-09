function calculatePayroll() {
  // 1. Get inputs
  const name = document.getElementById("employeeName").value;
  const hourlyRate = Number(document.getElementById("hourlyRate").value);
  const hoursWorked = Number(document.getElementById("hoursWorked").value);

  // 2. Compute gross pay
  const grossPay = hourlyRate * hoursWorked;

  // 3. Convert to annual
  const annualPay = grossPay * 12;

  // Hide both payslips first
  document.getElementById("paySlip").classList.add("d-none");
  document.getElementById("paySlipExemption").classList.add("d-none");

  // 4. Check ₱250,000 rule
  if (annualPay < 250000) {
    // ✅ EXEMPT
    document.getElementById("exemptName").textContent = name;
    document.getElementById("exemptGross").textContent = grossPay.toFixed(2);
    document.getElementById("exemptNet").textContent = grossPay.toFixed(2);

    document.getElementById("paySlipExemption").classList.remove("d-none");
  } else {
    // ❌ WITH DEDUCTIONS
    const tax = grossPay * 0.2;
    const sss = 750;
    const philHealth = 500;
    const pagIbig = 800;

    const netPay = grossPay - tax - sss - philHealth - pagIbig;

    document.getElementById("regName").textContent = name;
    document.getElementById("regGross").textContent = grossPay.toFixed(2);
    document.getElementById("regTax").textContent = tax.toFixed(2);
    document.getElementById("regNet").textContent = netPay.toFixed(2);

    document.getElementById("paySlip").classList.remove("d-none");
  }
}