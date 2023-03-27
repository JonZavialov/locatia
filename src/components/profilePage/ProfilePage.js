import ImageGrid from "./ImageGrid";

function ProfilePage({ data }){
    return (
        <ImageGrid images={data.images} uuid={data.uuid} name={data.name} />
    )
}

export default ProfilePage;