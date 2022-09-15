
    /*    
    *****************   Assignment1  ******************

Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

// Input
var mark_mass =78, john_mass =92, mark_height=1.69, john_height=1.95;
 var mark_mass_new =95, john_mass_new =92, mark_height_new=1.88, john_height_new=1.76;

//TEST DATA 1 - Calculating BMI of mark and John
 var mark_BMI = mark_mass /(mark_height**2);
var john_BMI = john_mass/(john_height**2);

//TEST DATA 2 - Calculating BMI of mark and John
var mark_BMI_new = mark_mass_new /(mark_height_new**2);
var john_BMI_new = john_mass_new/(john_height_new**2);

//checking for BMI who is having higher - TEST DATA 1
if(mark_BMI > john_BMI && mark_BMI!=john_BMI){
    var markHigherBMI = true;
}
if(markHigherBMI){
    console.log('Mark has higher BMI than John and value is '+mark_BMI);
}
else console.log('Mark has lower or same BMI of John and value is '+mark_BMI);

//checking for BMI who is having higher- TEST DATA 2
if(mark_BMI_new > john_BMI_new && mark_BMI_new!=john_BMI_new){
    var markHigherBMI_new = true;
}
if(markHigherBMI_new){
    console.log('Mark has higher BMI than John and value is '+mark_BMI_new);
}
else console.log('Mark has lower or same BMI of John and value is '+mark_BMI_new);