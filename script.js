
function calculateGPA() {
    let grade = 0;
    let gpa = 0;
    let checkOPT = document.getElementById('opt2').value;
    if (checkOPT != "Computer") {
        // Collecting all theory and practical grades for compulsory and optional subjects
        let compulsoryTheoryGrades = [
            document.getElementById("th_eng").value,
            document.getElementById("th_nep").value,
            document.getElementById("th_math").value,
            document.getElementById("th_sci").value
        ];

        let compulsoryPracticalGrades = [
            document.getElementById("pr_eng").value,
            document.getElementById("pr_nep").value,  // Assuming practical grade for Nepali
            document.getElementById("pr_math").value, // Assuming practical grade for Math
            document.getElementById("pr_sci").value   // Assuming practical grade for Science
        ];

        let optionalTheoryGrades = [
            document.getElementById("th_ss").value,  // Social Studies included in optional
            document.getElementById("th_opt1").value,
            document.getElementById("th_opt2").value
        ];

        let optionalPracticalGrades = [
            document.getElementById("pr_ss").value,  // Assuming practical for Social Studies
            document.getElementById("pr_opt1").value, // Assuming practical for Optional 1
            document.getElementById("pr_opt2").value  // Assuming practical for Optional 2
        ];

        // Calculating total theory and practical grades for compulsory subjects
        let totalCompulsoryTheory = 0, totalCompulsoryPractical = 0;
        let compulsoryValidTheoryGrades = 0, compulsoryValidPracticalGrades = 0;

        // Calculating theory grades for compulsory subjects
        for (let i = 0; i < compulsoryTheoryGrades.length; i++) {
            if (compulsoryTheoryGrades[i] !== "") {
                totalCompulsoryTheory += parseFloat(compulsoryTheoryGrades[i]);
                compulsoryValidTheoryGrades++;
            }
        }
        totalCompulsoryTheory_credit = totalCompulsoryTheory * 3.75;

        // Calculating practical grades for compulsory subjects
        for (let i = 0; i < compulsoryPracticalGrades.length; i++) {
            if (compulsoryPracticalGrades[i] !== "") {
                totalCompulsoryPractical += parseFloat(compulsoryPracticalGrades[i]);
                compulsoryValidPracticalGrades++;
            }
        }
        totalCompulsoryPractical_credit = totalCompulsoryPractical * 1.25;

        // Calculating total theory and practical grades for optional subjects
        let totalOptionalTheory = 0, totalOptionalPractical = 0;
        let optionalValidTheoryGrades = 0, optionalValidPracticalGrades = 0;

        // Calculating theory grades for optional subjects
        for (let i = 0; i < optionalTheoryGrades.length; i++) {
            if (optionalTheoryGrades[i] !== "") {
                totalOptionalTheory += parseFloat(optionalTheoryGrades[i]);
                optionalValidTheoryGrades++;
            }
        }
        totalOptionalTheory_credit = totalOptionalTheory * 3;

        // Calculating practical grades for optional subjects
        for (let i = 0; i < optionalPracticalGrades.length; i++) {
            if (optionalPracticalGrades[i] !== "") {
                totalOptionalPractical += parseFloat(optionalPracticalGrades[i]);
                optionalValidPracticalGrades++;
            }
        }
        totalOptionalPractical_credit = totalOptionalPractical * 1;

        let totalCredit = totalCompulsoryTheory_credit + totalCompulsoryPractical_credit + totalOptionalTheory_credit + totalOptionalPractical_credit;
         gpa = totalCredit / 32;
        
        if (gpa > 3.60 && gpa <= 4.0) {
            grade = "A+";
        } 
        else if (gpa > 3.20 && gpa <= 3.60) {
           grade = "A";
        } 
        else if (gpa > 2.80 && gpa <= 3.20) {
            grade = "B+";
        } 
        else if (gpa > 2.40 && gpa <= 2.80) {
            grade = "B";
        } 
        else if (gpa > 2.00 && gpa <= 2.40) {
            grade = "C+";
        } 
        else if (gpa > 1.60 && gpa <= 2.00) {
            grade = "C";
        } 
        else if (gpa >= 0 && gpa <= 1.60) {
            grade = "D";
        } 
        else {
           grade = "NG";
        }
    }
    // If Optional 2 is Computer
    else{
         // Compulsory Subjects
         let compulsoryTheoryGrades = [
            document.getElementById("th_eng").value,
            document.getElementById("th_nep").value,
            document.getElementById("th_math").value,
            document.getElementById("th_sci").value
        ];

        let compulsoryPracticalGrades = [
            document.getElementById("pr_eng").value,
            document.getElementById("pr_nep").value,   
            document.getElementById("pr_math").value, 
            document.getElementById("pr_sci").value 
        ];

        // Optional Subjects
        let optionalTheoryGrades = [
            document.getElementById("th_ss").value,    // Social Studies
            document.getElementById("th_opt1").value,  // Optional 1
            document.getElementById("th_opt2").value   // Computer
        ];

        let optionalPracticalGrades = [
            document.getElementById("pr_ss").value,    // Social Studies
            document.getElementById("pr_opt1").value,  // Optional 1
            document.getElementById("pr_opt2").value   // Computer
        ];

        // Compulsory Subjects Calculation
        let totalCompulsoryTheory = 0;
        let totalCompulsoryPractical = 0;

        for (let i = 0; i < compulsoryTheoryGrades.length; i++) {
            if (compulsoryTheoryGrades[i] !== "") {
                totalCompulsoryTheory += parseFloat(compulsoryTheoryGrades[i]);
            }
        }
        let totalCompulsoryTheory_credit = totalCompulsoryTheory * 3.75;

        for (let i = 0; i < compulsoryPracticalGrades.length; i++) {
            if (compulsoryPracticalGrades[i] !== "") {
                totalCompulsoryPractical += parseFloat(compulsoryPracticalGrades[i]);
            }
        }
        let totalCompulsoryPractical_credit = totalCompulsoryPractical * 1.25;

        // Optional Subjects Calculation Computer credits(2+2)]
        let totalOptionalTheory_credit =
            (optionalTheoryGrades[0] !== "" ? parseFloat(optionalTheoryGrades[0]) * 3 : 0) +   // Social Studies theory (3 credits)
            (optionalTheoryGrades[1] !== "" ? parseFloat(optionalTheoryGrades[1]) * 3 : 0) +   // Optional 1 theory (3 credits)
            (optionalTheoryGrades[2] !== "" ? parseFloat(optionalTheoryGrades[2]) * 2 : 0);    // Computer theory (2 credits)

        let totalOptionalPractical_credit =
            (optionalPracticalGrades[0] !== "" ? parseFloat(optionalPracticalGrades[0]) * 1 : 0) +   // Social Studies practical (1 credit)
            (optionalPracticalGrades[1] !== "" ? parseFloat(optionalPracticalGrades[1]) * 1 : 0) +   // Optional 1 practical (1 credit)
            (optionalPracticalGrades[2] !== "" ? parseFloat(optionalPracticalGrades[2]) * 2 : 0);    // Computer practical (2 credits)

        // Total Credit Earned
        let totalCredit = totalCompulsoryTheory_credit + totalCompulsoryPractical_credit +
                          totalOptionalTheory_credit + totalOptionalPractical_credit;

        // GPA Calculation (out of 32 total credits)
        gpa = totalCredit / 32;

        // Grade Determination
        if (gpa > 3.60 && gpa <= 4.0) {
            grade = "A+";
        } else if (gpa > 3.20 && gpa <= 3.60) {
            grade = "A";
        } else if (gpa > 2.80 && gpa <= 3.20) {
            grade = "B+";
        } else if (gpa > 2.40 && gpa <= 2.80) {
            grade = "B";
        } else if (gpa > 2.00 && gpa <= 2.40) {
            grade = "C+";
        } else if (gpa > 1.60 && gpa <= 2.00) {
            grade = "C";
        } else if (gpa >= 0 && gpa <= 1.60) {
            grade = "D";
        } else {
            grade = "NG";
        }

    }

    
    let displayGPA = document.getElementById('gpa-result');
    displayGPA.innerHTML = gpa;

        let displayGRADE = document.getElementById('grade-result');
        displayGRADE.innerHTML = grade;
    }

    