
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingParams } from "./actions/getListings";
import EmptyState from "./components/EmptyState";
import Container from "./components/container";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  searchParams: IListingParams
}
export const dynamic = 'force-dynamic'
const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState showReset />
    )
  }

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 xl:grid-cols-5 
      2xl:grid-cols-6 gap-8">
        {listings.map((listings) => {
          return (
            <ListingCard
              currentUser={currentUser}
              key={listings.id}
              data={listings}
            />
          )
        })}
      </div>
    </Container>
  )
}
export default Home;
