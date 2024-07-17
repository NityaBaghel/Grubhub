const Contact=()=>{
  return(
   <div className=" text-center">
    <h1 className="font-bold text-3xl p-4 m-4">COntact us !!!!</h1>
    
    <form>
      <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="name" />
      <input type="text"  className="border border-black p-2 m-2 rounded-lg"placeholder="message" />
      <button className= "border border-black p-2 m-2 bg-gray-50 rounded-lg" >Submit</button>
    </form>
     

   </div>
  );
}
export default Contact;