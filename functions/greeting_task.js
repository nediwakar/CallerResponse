exports.greeting_task =async function(context, event, callback,RB) {
    try {
    let Listen = false;
    let Remember = {};
    let Collect = false;
    let Tasks = false;
    let Redirect = false;
    let Handoff = false;
    let Say = "";
    // Add your code here.
    console.log("greeting_task");
    const Memory = JSON.parse(event.Memory);
    let RouteBalance;
    let mailingAddress;
    let webPaymentAddress;

    if(Memory.RouteBalance === undefined)
     RouteBalance=400;
    else
     RouteBalance=Memory.RouteBalance;

     if(Memory.mailingAddress=== undefined)
       mailingAddress='Woodland';
    else
       mailingAddress=Memory.mailingAddress;
    
    if(Memory.webPaymentAddress=== undefined)
       webPaymentAddress='test@convergentusa.com';
    else
      webPaymentAddress=Memory.webPaymentAddress;
    
    console.log('mailingAddress: '+ mailingAddress);
    console.log('webPaymentAddress: '+ webPaymentAddress);
    console.log('RouteBalance: '+ RouteBalance);

    if(Memory.check_cnt===undefined)
    {
      Remember.check_cnt=0;
      console.log('Counter: '+Remember.check_cnt);
    }
   // This code runs when comming from Address_task//
   if(Remember.check_cnt===0)
      Prompt = `To make a payment using credit card say credit card,
                to make a payment using ACH say bank or ACH ,
                for our website address say website, 
                for our mailing address say mailing,
                to speak to a Representative say agent, 
                to hear these options again say repeat.`;
    else{
      if(Memory.AFlag)
         Prompt = `To make a payment using credit card press 1 or say credit card,
                   to make a payment using ACH press 2 or say bank or ACH ,
                   to speak to a Representative press 5 or say agent, 
                   to hear these options again press 0 or say repeat.`;
      else
          Prompt = `To make a payment using credit card press 1 or say credit card,
                    to make a payment using ACH press 2 or say bank or ACH ,
                    for our website address press 3 or say website, 
                    for our mailing address press 4 or say mailing,
                    to speak to a Representative press 5 or say agent, 
                    to hear these options again press 0 or say repeat.`;
      
    }



    
   Say = `You can pay your Total balance or less than your total balance of $${RouteBalance} , `;
   Say += Prompt;
    
   Listen = {
     "voice_digits":{
       "num_digits": 1,
       "finish_on_key": "#",
       "redirects": {
           0: "task://greeting",
           1: "task://CreditCard",
           2: "task://ACH",
           3: "task://Address",
           4: "task://Address",
           5: "task://Agent"
       }
     }
   }
  
  
    //End of your code.
  
   RB(Say, Listen, Remember, Collect, Tasks, Redirect, Handoff, callback);
  
} catch (error) {
console.error(error);
callback( error);
}
};