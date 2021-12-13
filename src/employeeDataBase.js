const employeeData = (data) => {
    let html = data.map (employee => {
        if(employee.manager) {
            return `
            <h2>Name: ${employee.name}</h2>
                <p>Title: ${employee.job}</p>
				<p>Id: ${employee.id}</p>
				<p>Email: ${employee.Email}</p>
				<p>Office: ${employee.office}</p>
            `
        }
    })

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