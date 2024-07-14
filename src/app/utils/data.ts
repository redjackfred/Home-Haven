export const homes: HomeType[] = [    
  ];
  
  export type HomeType = {
    _id: number;
    id: number;
    name:string;
    address: string;
    city: string;
    zip_code: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    square_feet: number;
    lot_size: number;
    year_built: number;
    description: string;
    image_url: string[];
  }