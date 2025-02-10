// base requirements:
// multiple pages
// forms
// manage array of objects
// relation to other objects

// office
// manage inventory
// manage employees
// manage loaned equipment

// Model

// API

type Inventory = {
    equipment: string,
    amount: number,
    type: string,
}

type Employees = {
    name: string,
    depatment: string,
    loanedEmquipment: string,
}

function loanEmquipment(employee: Object, equipment: Object, amount: number) {

}

function returnLoanedEquipment(employee: Object, equipment: Object, amount: number){

}

function addNewEquipment(inventory: string[], newEquipmentName: string, newEquimpmentAmount: number, newEquipmentType: string) {

}

