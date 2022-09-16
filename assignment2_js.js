/**
 * Rewriting miniATM code using if-else-if
  */
 var account_balance=2000, deposite=1000, withdrawalAmount = 500, ministatement;
 var choice='withdraw'; //checkbalance, withdraw,deposite,ministatement


 if(choice=='checkbalance') {
    console.log("Your Balance is ",account_balance);
 }
 else if(choice=='withdraw'){
    if(account_balance>=withdrawalAmount){
        account_balance-= withdrawalAmount;
        console.log("Your updated balanace is", account_balance);
         }
         else
         console.log("Insufficinet balanace");

 }
 else if(choice=='deposite'){
    account_balance+= deposite;
    console.log("Your updated balanace is", account_balance);
 }
 
 else if(choice=='ministatement'){
    console.log("Your Ministatement is", ministatement);
 }
else{
    console.log("Server Error");
}