import LocalImages from "./LocalImages";

export const Constants = {
    categories: [
        {'id':1,'title':'Now Playing','img':LocalImages.now_playing},
        {'id':2,'title':'Upcoming','img':LocalImages.upcoming},
        {'id':3,'title':'Top Rated','img':LocalImages.top_rated},
        {'id':4,'title':'Popular','img':LocalImages.popular}
    ],
};


export enum ImageSizes {
    original= "original",
     w45 = "w45/", 
     w92 = "w92/",
     w154 = "w154/",
     w185 = "w185/",
     w300 = "w300/",
     w342 = "w342/",
     w500 = "w500/",
     w1280 = "w1280/",
     h632 = "h632/",
};