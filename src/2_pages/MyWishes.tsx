import ListPageContainer from "../6_shared/ui/ListPageContainer"
import ListActionBar from "../3_widgets/ListActionBar"
import MyWishesList from "../3_widgets/list/MyWishList"


export default function MyWishes() {
    return (
        <ListPageContainer title='Список моих желаний'>
            <ListActionBar />
            <MyWishesList />
        </ListPageContainer>
    )
}