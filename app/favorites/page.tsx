import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListing from "../actions/getFavoritesListing";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
    const listings = await getFavoritesListing();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No favorites found"
                subtitle="Look like you have no favorite listing"
            />
        )
    }

    return (
        <FavoritesClient
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default ListingPage;