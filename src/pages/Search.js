import { useEffect, useState } from "react";
import Movie from "../components/Movie"
import axios from "axios";
import requests from "../Requests";


const Search = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(requests).then((response) => {
            setMovies(response.data);
        });
    }, []);

    return (
        <>
            <div className="mt-6 flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Enter your keyword..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[60%] h-[40px] border rounded text-slate-700 p-3 mb-5" />
            </div>
            <div className="p-4 w-full h-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                {movies.filter((item) => {
                    return search.toLowerCase() === ""
                        ? item
                        : item?.title.toLowerCase().includes(search.toLowerCase())
                })
                    .map((item, id) => (
                        <Movie key={id} item={item} />
                    ))
                }
            </div>
        </>
    )
}

export default Search;