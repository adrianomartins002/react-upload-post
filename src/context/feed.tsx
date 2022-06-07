import { createContext, ReactNode, useContext, useState } from "react";

interface Feed {
    imgSrc: string;
    author: string;
    postDescription: string;
}

interface FeedContext {
    feedList: Feed[];
    setFeedList: (data: Feed[]) => void
}

const initialList: FeedContext = {
    feedList: [],
    setFeedList: (data: Feed[] | []) => { }
}

export const FeedContext = createContext<FeedContext>(initialList);

type FeedProviderProps = {
    children: ReactNode;
}

function FeedProvider({ children }: FeedProviderProps) {
    const [feedList, setFeedList] = useState([{
        imgSrc: "",
        author: "",
        postDescription: ""
    }]);

    return (
        <FeedContext.Provider value={{
            feedList,
            setFeedList
        }}>
            {children}
        </FeedContext.Provider>
    )

}

function useFeed() {
    const { feedList, setFeedList } = useContext(FeedContext);
    return { feedList, setFeedList };
}


export { FeedProvider, useFeed };