import jsonpath from "jsonpath";

const user = {
    name: 'Juntao Qiu',
    address: 'Xian, Shaanxi, China',
    projects: [
        { name: 'ThoughtWorks Univeristy'},
        { name:  'ThoughtWorks Core Business Beach'}
    ]
};

const result = jsonpath.query(user, '$.projects');
console.log(JSON.stringify(result));