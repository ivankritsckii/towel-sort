
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result=[];
    if(!matrix){
        return []
    }
    matrix.forEach((item, index)=>{
        if(index%2==0){
            for(let i=0; i<item.length; i++){
                result.push(item[i])
            }
        }
        else{
            for(let i=item.length-1; i>=0; i--){
                result.push(item[i])
            } 
        }
    })
  return result;
}
