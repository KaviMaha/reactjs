<div id="grid"></div>
<script>
  $("#grid").kendoGrid({
    columns: [
      { field: "studentName" },
      { field: "rollno" },
      { field: "class" },
       { field: "dob" },
        { field: "email" },
         { field: "phone" },
         { field: "englishMark" },
          { field: "scienceMark" },
           { field: "socialMark" },
            { field: "totalMark" }
    ],
filterable: true,
    dataSource: {
      data: [
        { studentName: "kavitha", rollno: "20", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "preethi", rollno: "21", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "usha", rollno: "22", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "sophi", rollno: "23", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "kavitha", rollno: "20", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "preethi", rollno: "21", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "usha", rollno: "22", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "sophi", rollno: "23", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "kavitha", rollno: "20", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "preethi", rollno: "21", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "usha", rollno: "22", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" },
        { studentName: "sophi", rollno: "23", class: "11", dob: "30/10/98" , email:"kavi@gmail" , phone: "123456789", englishMark: "90", scienceMark: "80",socialMark: "70", totalMark: "90" }
      
      ],
      pageSize: 4
    },
    pageable: {
      pageSizes: true
    }
  });
</script>