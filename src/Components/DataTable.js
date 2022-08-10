import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material'
import React from 'react'

const DataTable = () => {
    const rows = [
        {
            id: 1143155,
            name: "Deepak",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            gender: "male",
            role: "React Developer",
            email: "trainee3.digital@gmail.com",
            mobile: "9179693749",
            attendance: "85%",
            status: "Active",
            action: ""
        },
        {
            id: 1143155,
            name: "Lucky",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            gender: "male",
            role: "React Developer",
            email: "trainee5.digital@gmail.com",
            mobile: "9179693749",
            attendance: "85%",
            status: "Active",
            action: ""
        },
        {
            id: 1143155,
            name: "Ashish",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            gender: "male",
            role: "React Developer",
            email: "trainee4.digital@gmail.com",
            mobile: "9179693749",
            attendance: "85%",
            status: "Active",
            action: ""
        },
        {
            id: 1143155,
            name: "Alka",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            gender: "Female",
            role: "React Developer",
            email: "trainee3.digital@gmail.com",
            mobile: "9179693749",
            attendance: "85%",
            status: "InActive",
            action: ""
        },
        {
            id: 1143155,
            name: "Ritika",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            gender: "Female",
            role: "React Developer",
            email: "trainee3.digital@gmail.com",
            mobile: "9179693749",
            attendance: "85%",
            status: "Active",
            action: ""
        },
    ]
    return (

        <>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">Id</TableCell>
                            <TableCell className="tableCell">Name</TableCell>
                            <TableCell className="tableCell">Gender</TableCell>
                            <TableCell className="tableCell">Role</TableCell>
                            <TableCell className="tableCell">Email</TableCell>
                            <TableCell className="tableCell">Mobile</TableCell>
                            <TableCell className="tableCell">Attendance</TableCell>
                            <TableCell className="tableCell">Status</TableCell>
                            <TableCell className="tableCell">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className="tableCell">{row.id}</TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img src={row.img} alt="img" className="image" />
                                        {row.name}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">{row.gender}</TableCell>
                                <TableCell className="tableCell">{row.role}</TableCell>
                                <TableCell className="tableCell">{row.email}</TableCell>
                                <TableCell className="tableCell">{row.mobile}</TableCell>
                                <TableCell className="tableCell">{row.attendance}</TableCell>
                                <TableCell className="tableCell">
                                    <span className={`status${row.status}`}>{row.status}</span>
                                </TableCell>
                                <TableCell className="tableCell">{row.action}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default DataTable
