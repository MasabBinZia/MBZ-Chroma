export type CardType ={
    title: string;
    link:string
    description: string;
    imageUrl: string;
  }

  export type  Resource = {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    _id: string;
  }
  

  export type Metadata = {
    URL: string;
    keywords: string[];
    title: {
      default: string;
      template: string;
    };
    description: string;
    opengraph: {
      title: string;
      description: string;
      url: string;
      siteName: string;
      locale: string;
      type: string;
    };
    robots: {
      index: boolean;
      follow: boolean;
    };
  };