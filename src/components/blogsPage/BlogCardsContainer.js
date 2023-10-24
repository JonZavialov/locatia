import Menu from "../menu/Menu"
import BlogCard from "./BlogCard"

function BlogCardsContainer({ data, sort }){
    return (
        <div id="blog-cards-container-container">
            <Menu />
            <div id="blog-cards-container">
                {
                    Object.keys(data).length !==0 ?
                        Object.entries(data).map(([bid, obj]) => ({
                            bid,
                            // creating a shallow copy (this is simply used to add the bid to the data)
                            ...obj
                            // sorting in the order of the sort (timestamp)
                        })).sort((a, b) => b[sort] - a[sort]).map((x) => (
                            <BlogCard key={x.bid} blogInfo={x} bid={x.bid} />
                        ))
                    :
                        <h1>No results found!</h1>
                }
            </div>
        </div>
    )
};

export default BlogCardsContainer