import { MyListContainer, ItemContainer, ItemCard } from "./mylist.styles";
import { useSelector } from "react-redux";
import { selectFavouriteListItem } from "../../store/mylist/mylist.selector";

const MyList = () => {
  // Retrieve the list items from the Redux store
  const listItems = useSelector(selectFavouriteListItem);

  return (
    <MyListContainer>
      <h1>My List</h1>
      {/* Display the list of items if there are any */}
      {listItems.length > 0 ? (
        <ItemContainer>
          {/* Iterate through each item and render its details */}
          {listItems.map((item) => (
            <ItemCard key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                loading='lazy'
                alt={item.title || item.original_name}
              />
              <div className='info'>
                <h5>{item.title || item.original_name}</h5>
              </div>
            </ItemCard>
          ))}
        </ItemContainer>
      ) : (
        // Render a message when the list is empty
        <p style={{ color: "darkgray" }}>Your favourites list is empty.</p>
      )}
    </MyListContainer>
  );
};

export default MyList;
