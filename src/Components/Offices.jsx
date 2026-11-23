import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Offices = forwardRef((_, ref) => {
    const [offices, setOffices] = useState([]);
    const [search, setSearch] = useState("");

    const fetchAllOffices = async () => {
        try {
            const response = await axios.get("http://localhost:8082/api/office/all");
            setOffices(response.data);
        } catch (error) {
            toast.error("Failed to fetch offices: " + error.message);
        }
    };

    const searchOffices = async (value) => {
        try {
            if (value.trim() === "") {
                fetchAllOffices();
                return;
            }
            const response = await axios.get(`http://localhost:8082/api/office/search?search=${value}`);
            setOffices(response.data);
        } catch (error) {
            toast.error("Search failed: " + error.message);
        }
    };

    const deleteOffice = async (id) => {
        try {
            await axios.delete(`http://localhost:8082/api/office/delete/${id}`);
            toast.success("Office deleted successfully!");
            fetchAllOffices();
        } catch (error) {
            toast.error("Failed to delete office: " + error.message);
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        searchOffices(value);
    };

    useImperativeHandle(ref, () => ({
        refresh: fetchAllOffices
    }));

    useEffect(() => {
        fetchAllOffices();
    }, []);

    return (
        <div>
            <h1>Offices</h1>
            <label>Search: </label>
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search by name or number"
            />
            <table border="1" cellPadding="8" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Office Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {offices.map((office) => (
                        <tr key={office.id}>
                            <td>{office.id}</td>
                            <td>{office.name}</td>
                            <td>{office.number}</td>
                            <td>
                                <button
                                    onClick={() => deleteOffice(office.id)}
                                    style={{ marginRight: "8px", backgroundColor: "red", color: "white" }}
                                >
                                    DELETE
                                </button>
                                <button disabled style={{ backgroundColor: "gray", color: "white", cursor: "not-allowed" }}>
                                    UPDATE
                                </button>
                            </td>
                        </tr>
                    ))}
                    {offices.length === 0 && (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>No offices found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
});

export default Offices;
