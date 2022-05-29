const fs = require("fs");


fs.writeFile("employees.json", `{"name": "Employee 1 Name", "salary": 2000}`, "utf-8", (error) => {
    if (error) {
        console.log(error);
    }
    console.log("dosya oluşturuldu");
})


fs.readFile("employees.json", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data);
    console.log("dosya okundu");
})

fs.appendFile("employees.json", `\n{"name": "Yusuf", "salary": "5000" }`, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('Veri başarılı bir şekilde eklendi');

})

fs.unlink("employees.json", error => {
    if (error) {
        console.log(error);
    }
})
