exports.CreditCard_task =async function(context, event, callback,RB) {
    try {
    let Listen = false;
    let Remember = {};
    let Collect = false;
    let Tasks = false;
    let Redirect = false;
    let Handoff = false;
    let Say = "";
    // Add your code here.
    const Memory = JSON.parse(event.Memory);

    Say = " ";
    Remember.choice=1;
    Remember.c="Credit Card";
    
    //End of your code.
  
   RB(Say, Listen, Remember, Collect, Tasks, Redirect, Handoff, callback);
  
} catch (error) {
console.error(error);
callback( error);
}
};