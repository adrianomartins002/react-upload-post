import { createContext, ReactNode, useContext, useState } from "react";

interface Feed {
    imgSrc: string;
    author: string;
    postDescription: string;
}

interface FeedContextType {
    feedList: Feed[];
    setFeedList: Function
}

const initialList: FeedContextType = {
    feedList: [],
    setFeedList: ()=>{}
}

export const FeedContext = createContext<FeedContextType>(initialList);

type FeedProviderProps = {
    children: ReactNode;
}

function FeedProvider({ children }: FeedProviderProps) {
    const [feedList, setFeedList] = useState([]);

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