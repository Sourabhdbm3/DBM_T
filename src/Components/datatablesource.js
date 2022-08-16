import { Phone } from "react-feather";

export const userColumns = [

    { field: 'id', headerName: 'ID', width: 70 }, {
        field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="kuch bhi" />
                    {params.row.username} <br/>
                     #2345
                </div>
                
            );
        },
    },
    {
        field: 'email', headerName: 'Email', width: 200
    },
    {
        field: 'city', headerName: 'City', width: 100
    },
    {
        field: 'phone', headerName: 'Phone', width: 200
    },
    {
        field: 'status', headerName: 'Status', width: 100, renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }

]
// ............
export const userRows = [
    {
        id: 1,
        username: "sunny",
        img: "https://e7.pngegg.com/pngimages/115/523/png-clipart-product-design-brand-logo-font-demo-text-orange-thumbnail.png",
        status: "active",
        email: "sun12@gmail.com",
        city: "Lucknow",
        phone:6555545765
    },
    {
        id: 2,
        username: "raj",
        img: "https://e7.pngegg.com/pngimages/115/523/png-clipart-product-design-brand-logo-font-demo-text-orange-thumbnail.png",
        status: "pending",
        email: "sun12@gmail.com",
        city: "kanpur",
        phone:6555545765
    },
    {
        id: 3,
        username: "lucky",
        img: "https://e7.pngegg.com/pngimages/115/523/png-clipart-product-design-brand-logo-font-demo-text-orange-thumbnail.png",
        status: "active",
        email: "sun12@gmail.com",
        city: "Sitapur",
        phone:6555545765
    },
    {
        id: 4,
        username: "komal",
        img: "https://e7.pngegg.com/pngimages/115/523/png-clipart-product-design-brand-logo-font-demo-text-orange-thumbnail.png",
        status: "pending",
        email: "sun12@gmail.com",
        city: "lucknow",
        phone:6555545765
    },
    {
        id: 5,
        username: "deepak",
        img: "https://e7.pngegg.com/pngimages/115/523/png-clipart-product-design-brand-logo-font-demo-text-orange-thumbnail.png",
        status: "active",
        email: "sun12@gmail.com",
        city: "Gao",
        phone:6555545765
    },
    {
        id: 6,
        username: "bharti",
        img: "https://e7.pngegg.com/pngimages/115/523/png-clipart-product-design-brand-logo-font-demo-text-orange-thumbnail.png",
        status: "pending",
        email: "sun12@gmail.com",
        city: "Bhopal",
        phone:6555545765
    }
]