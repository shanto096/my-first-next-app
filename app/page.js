import homeData from "@/api/allData";




export default  async function Home() {

  const data = await homeData()
  
 
  return (
    <>
    <div>
      {
        data?.map(({name}, i) =>(
          <div key={i} className="text-white">
            <h1>{name}</h1>
        
          </div>
        ))
      }

       </div>
    </>
  );
}
