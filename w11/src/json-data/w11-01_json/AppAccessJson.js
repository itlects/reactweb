import Data1 from './records.json';

const AppAccessJson = ()=>{

  return(
    <>
      <div className="App">{
        Data1 && Data1.map(e=>{
          return (
            <div className='box' key={e.id}><strong>{e.title}</strong><br/>
            {e.content}<br/>
            {
              e.tech && e.tech.map(t=>{
                return(
                  <div key={e.id}> ..{t.name}..</div>
                ); 
              })
            }
            <br/>
            </div>

          )
        })
      }
      </div>
    </>
  );
}


export default AppAccessJson;