const Manager = require("../lib/Manager")

const employeeData = (data) => {
    let html = data.map (employee => {
        if(employee.getJob() === "Manager") {
            return `
            <h2>Name: ${employee.name}</h2>
                <p>Title: ${employee.getJob()}</p>
				<p>Id: ${employee.id}</p>
				<p>Email: ${employee.email}</p>
				<p>Office: ${employee.office}</p>
            `
        }else if ( employee.getJob() === "Engineer") {
            return `
            <h2>Name: ${employee.name}</h2>
                <p>Title: ${employee.getJob()}</p>
				<p>Id: ${employee.id}</p>
				<p>Email: ${employee.email}</p>
				<p>GitHub: https://github.com/${employee.username}</p>
            `
        }else if ( employee.getJob() === "Intern") {
            return `
            <h2>Name: ${employee.name}</h2>
                <p>Title: ${employee.getJob()}</p>
				<p>Id: ${employee.id}</p>
				<p>Email: ${employee.email}</p>
				<p>School:${employee.school}</p>
            `
        }
    })
console.log(data)

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
        <h1 className="text-blue-800 text-lg">${html.join("")}</h1>
    
    
    </body>
    </html>
        `
}

module.exports= employeeData