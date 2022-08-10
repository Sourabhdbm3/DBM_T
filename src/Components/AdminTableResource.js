export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellwithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}

                </div>
            );
        },
    },
    {
        field: "gender",
        headerName: "Gender",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "role",
        headerName: "Role",
        width: 230,
    },
    {
        field: "status",
        headerName: "status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>

                </div>
            );
        },
    },
];

//this is a temporary data

export const userRows = [
    {

        id: 1,
        username: "Deepak",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        gender: "male",
        age: 35,
        email: "1snow@gmail.com",
        role: "React_Devlp.",
        status: "active",

    },
    {
        id: 1,
        username: "Lucky",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        gender: "male",
        age: 25,
        email: "1snow@gmail.com",
        role: "React_Devlp.",
        status: "active",

    },
    {
        id: 1,
        username: "Ashish",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        gender: "male",
        age: 35,
        email: "1snow@gmail.com",
        role: "React_Devlp.",
        status: "active",
    },
    {
        id: 1,
        username: "mohit",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        gender: "male",
        age: 35,
        email: "1snow@gmail.com",
        role: "React_Devlp.",
        status: "active",
    },
    {
        id: 1,
        username: "Ritika",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        gender: "Female",
        age: 35,
        email: "1snow@gmail.com",
        role: "React_Devlp.",
        status: "active",
    },
    {
        id: 1,
        username: "Alka",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        gender: "Female",
        age: 35,
        email: "1snow@gmail.com",
        role: "React_Devlp.",
        status: "active",
    },
];