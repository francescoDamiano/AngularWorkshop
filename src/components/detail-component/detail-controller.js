class DetailController {
    constructor($stateParams)
    {this.name=$stateParams.name;}
    
}

export default [
        '$stateParams',
        DetailController];


