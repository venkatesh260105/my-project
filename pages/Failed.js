export async function getServerSideProps(context) {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/user/123');
        if(!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        return {props: {data}};
    }catch(error){
        return{props:{data: null,error:error.message}};
    }

}
    export default function Failed({data,error}){
        if(error){
            return <h1>Error:{error}</h1>
        }
        return(
            <div>
                <h1>
                    Data Fetched from Server:</h1>
                    <pre>{JSON.stringify(data,null,2)}</pre>
            </div>
        )
    }
    

