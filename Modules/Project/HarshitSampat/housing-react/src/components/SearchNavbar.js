import { React, useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchNavbar() {

  //data from node
  

  //for searching element
  const [search, setSearch] = useState("");
  const [emmail,setEmail]= useState("");
  

  
  //handle search
  const handleSearch = e => {
    // console.log(`Search : ${e.target.value}`);
    e.preventDefault();     
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="search-nav">
        <nav className="search-nav-nav">
          <a className="nav-buy" href="/buy/real-estate-ahmedabd">
            Buy
          </a>
          <a className="nav-rent" href="/Rent">
            Rent
          </a>
          <a className="nav-pg-coliving" href="paying-guests/pgs-in-ahmedabd">
            PG/Coliving
          </a>
        </nav>
        <div className="search-div">
          <div cl assName="search-div1">
            <div className="input-container">
              <div>
                <select
                  className="search-bar search-bar-1"
                  id="Selectedoption"
                  onChange={handleSearch}
                >
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option selected value="Surat">
                    Surat
                  </option>
                  <option value="Ahmedaad">Rajkot</option>
                  <option value="Baroda">Baroda</option>
                  <option value="Vapi">Vapi</option>
                  <option value="Mumbai">Mumbai</option>p
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangluru">Banguluru</option>
                  <option value="Jaypur">Jaypur</option>
                </select>
              </div>
            </div>
          </div>
          <div className="search-div2"> 
            <input
              placeholder="Search for locality,landmark,project or builder"
              className="search-bar search-bar-2"
              value={search}
              name="Searchbar"  
              onChange={handleSearch} 
            />
          </div>
          <button className="search-buttondiv" type="submit">
            <BsSearch onClick={handleSearch}/>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
    
export default SearchNavbar;
