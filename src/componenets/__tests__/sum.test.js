import { sum } from "../sum";

test("Sum function should  calculate the su of two numsbers",()=>{
  const result =sum(3,4);


  // Assertion
  expect(result).toBe(7); 

}); 