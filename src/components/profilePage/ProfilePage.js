import ImageGrid from "./ImageGrid";

function ProfilePage({ data }){
    return (
        <ImageGrid images={data.images} />
    )
}

export default ProfilePage;