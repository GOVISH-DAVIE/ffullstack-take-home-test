import { Add, Close } from "@mui/icons-material";
import { Chip } from "@mui/material";
import useFilter from "../../hooks/filter";
import React from "react";

export const FilterChips = ({ filtersBooks }: { filtersBooks: string[]}) => {
    const filterhook = useFilter()
    return (
        <React.Fragment>

            {filtersBooks.filter((filter) => !filterhook.filter.includes(filter)).map((filter, index) => (
                <Chip
                sx={(theme) => ({
                    height:'40px',
                    width:'70px',
                    m:1
                })}  
                    key={index}
                    label={filter}
                    deleteIcon={<Add />}
                    onDelete={() => filterhook.addFilter(filter)}
                />
            ))}
            {filterhook.filter.map((filter, index) => (
                <Chip
                    sx={(theme) => ({
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.secondary.main,
                        height:'40px',
                        width:'70px',
                        m:1
                    })}

                    key={index}
                    label={filter}
                    deleteIcon={<Close />}

                    onDelete={() => filterhook.removeFilter(filter)}
                />
            ))}
        </React.Fragment>
    );
}