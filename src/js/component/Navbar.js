import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const Navbar = () => {
    const { store } = useContext(Context);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <Link to="/" className="text-light">
                <span className="navbar-brand mb-0 h1">Star Wars Blog</span>
            </Link>
            <div className="ml-auto">
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} direction="left">
                    <DropdownToggle caret>
                        Favorites
                    </DropdownToggle>
                    <DropdownMenu end>
                        {store.favorites.length === 0 ? (
                            <DropdownItem>No favorites</DropdownItem>
                        ) : (
                            store.favorites.map((item, index) => (
                                <DropdownItem
                                    key={index}
                                    tag={Link}
                                    to={`/single/${item.type === "characters" ? "people" : item.type}/${item.uid}`}
                                >
                                    {item.name}
                                </DropdownItem>
                            ))
                        )}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </nav>
    );
};
