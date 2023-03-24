import getProfiles from "../../firebase-utils/getProfiles"
import { useEffect, useState } from "react"

function HomePage(){
    const [data, updateData] = useState();

    useEffect(() => {
        const getData = async () => {
            updateData(await getProfiles());
        }
        getData();
    }, []);

    return data && <Child data={data} />
}

const Child = ({data}) => (
    <div>
        {data.map((x) => (
            <p>{JSON.stringify(x)}</p>
        ))}
    </div>
);

export default HomePage