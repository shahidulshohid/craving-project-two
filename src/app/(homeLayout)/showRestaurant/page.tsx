// import dbConnect from "@/lib/dbConnect";
// import { Collection } from "mongodb";

// // Define a type for the service data
// interface ResturantType {
//   _id: string;
//   title: string;
//   location: string;
//   owner: string;
//   email: string;
// }

// const ShowRestaurant = async () => {
//     // Get the database instance
//     const db = await dbConnect();

//     // Get the collection
//     const restaurantCollection: Collection<ResturantType> = db.collection("resturant");

//     // Fetch data from MongoDB
//     const data: ResturantType[] = await restaurantCollection.find({}).toArray();

//     return (
//         <div>
//             <h1 className="text-center">Resturant</h1>
//             <ul>
//                 {data.map((restaurant) => (
//                     <div key={restaurant._id}>
//                         <h1 className="text-center">{restaurant.title}</h1>
//                     </div>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ShowRestaurant;


import { GetServerSideProps } from 'next';
import dbConnect from "@/lib/dbConnect";
import { Collection } from "mongodb";

// Define a type for the restaurant data
interface RestaurantType {
  _id: string;
  title: string;
  location: string;
  owner: string;
  email: string;
}

interface ShowRestaurantProps {
  restaurants: RestaurantType[];
}

const ShowRestaurant: React.FC<ShowRestaurantProps> = ({ restaurants }) => {
  return (
    <div>
      <h1 className="text-center">Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id}>
            <h1 className="text-center">{restaurant.title}</h1>
          </div>
        ))}
      </ul>
    </div>
  );
};

// This will run on the server before rendering the page
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Get the database instance
    const db = await dbConnect();

    // Get the collection
    const restaurantCollection: Collection<RestaurantType> = db.collection("restaurant");

    // Fetch data from MongoDB
    const data: RestaurantType[] = await restaurantCollection.find({}).toArray();

    // Return the data as props to the page component
    return {
      props: {
        restaurants: JSON.parse(JSON.stringify(data)), // Serialize MongoDB data
      },
    };
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return {
      props: {
        restaurants: [],
      },
    };
  }
};

export default ShowRestaurant;

