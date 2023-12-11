import React from "react";
import {ArticleWrapper, NewsWrapper, NewsWrapperHeader, TittleWrapper, ContentWrapper} from "./NewsSection.styles";
import {Button} from "../../atoms/Button/Button";



const data = [
    {
        title: 'Apel szkolny 26.10.2023',
        category: 'Ogłoszenie porzadkowe',
        content: 'Ktos rzucil twoim starym z okna',
    },
    {
        title: 'Apel szkolny 26.10.2023',
        category: 'Ogłoszenie porzadkowe',
        content: 'Ktos rzucil twoim starym z okna',
    },
    {
        title: 'Apel szkolny 26.10.2023',
        category: 'Ogłoszenie porzadkowe',
        content: 'Ktos rzucil twoim starym z okna',
    },
    {
        title: 'Apel szkolny 26.10.2023',
        category: 'Ogłoszenie porzadkowe',
        content: 'Ktos rzucil twoim starym z okna',
    },
    {
        title: 'Apel szkolny 26.10.2023',
        category: 'Ogłoszenie porzadkowe',
        content: 'Ktos rzucil twoim starym z okna',
    },
];



export const NewsSection = () => {
    return (
        <NewsWrapper>
        <NewsWrapperHeader>News Feed</NewsWrapperHeader>
        {data.map(({ title , category , content }) => (
            <ArticleWrapper key={title}>
                <TittleWrapper>
                    <h3>{title}</h3>
                    <p>{category}</p>
                </TittleWrapper>
                <ContentWrapper>
                <p>
                    {content}
                </p>
                <Button isBig>Zobacz</Button>
                
                </ContentWrapper>
           </ArticleWrapper>
        ))}
        </NewsWrapper>
)};
