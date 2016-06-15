function myfilter()
{
   return function(input){
       if(typeof(input)!=='string')
       {return value;}
       return input.charAt(0).toLowerCase() + input.substring(1);
   } 
}


export default [myfilter];