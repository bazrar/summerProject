const fs = require('fs');
const path = require('path')
const {promisify} = require('util')
const rootDir = require('../utils/path')



module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save () {
        const p = path.join(rootDir, 'data', 'test.json')
        fs.readFile(p, (err, content) => {
            let products = []; 
            if(!err) {
                products = JSON.parse(content)
            }
            products.push(this); 
            fs.writeFile(p, JSON.stringify(products), err => console.log(err))

        })
    }

    static async fetchAll() {
        const p = path.join(rootDir,'data', 'test.json')
       try {
           const res = promisify(fs.readFile)(p, {encoding: 'utf-8'});
           return res
       } catch(err) {
           console.log(err)
       }
    }
}