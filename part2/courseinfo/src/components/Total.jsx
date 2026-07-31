export const Total=({parts})=>{
     return <>
           <p>Total {
              
              parts.reduce((accumulator,part)=>{
                 return accumulator+part.exercises;
              },0)
              }</p>
          </>
}