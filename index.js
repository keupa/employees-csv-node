#!/usr/bin/env node

const fs = require('fs')

const args = process.argv.slice(2)
const id = args[0] || undefined
const query = args[1] || undefined

    fs.readFile('employees.csv', 'utf-8', function(err,data){
        if(err){
            console.error(err.message)
        }
        // convert csv file to json 
        let headers = data.split('\n')[0].split(',')
        let employeesObj = data.split('\n').slice(1).map( employee => {
            var result = {}
            headers.forEach((header)=>{
                result[header] = employee.split(',')[headers.indexOf(header)]
            })
            return result
        })

        // if there's no args show all employees
        if (args.length < 1){
            console.log('Employee data: \n', employeesObj)
            return
        }

        let searchById = employeesObj.filter(employee => {
            return employee.id == id
        }) 
        
        if(Object.entries(searchById).length === 0){
            console.log('This employee doesn\'t exist')
            return
        }
        
        if(query){
            let obj = searchById[0]
            if(obj.hasOwnProperty(query)){
                console.log(obj[query])
            } else {
                console.log(`Input query doesn't exist! You can search the following keywords: 
                ⋆ id 
                ⋆ first_name
                ⋆ last_name
                ⋆ email
                ⋆ ip_address
               `)
            }
        } else {
            console.log('Employee information: \n', searchById)
        }
    }) 
