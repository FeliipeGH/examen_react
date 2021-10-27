/*eslint-disable*/
// @ts-nocheck
import React from "react";
import {useFilters, usePagination, useSortBy, useTable,} from "react-table";
// A great library for fuzzy filtering/sorting items
import {matchSorter} from "match-sorter";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
/*import CustomInput from "components/CustomInput/CustomInput.js";*/
import styles from "../../../../assets/styles/tss/selectStyles";
import {tableStyles} from "./tableStyles";
import {FormControl, Grid, MenuItem, Select} from "@material-ui/core";
import {CustomInput} from "../../materialInput/localComponents/CustomInput";
import "./scss/main.scss";
import classnames from "classnames";

const newStyles = {
    ...styles,
    ...tableStyles,
    formControlMargins: {
        margin: "3px 0 !important",
    },
    gridContainer: {
        justifyContent: "center",
        width: "100%"
    },
    tableContent: {

        overflowX: "auto"
    },
    mainContent: {
        width: "100%",
    }
};

const useStyles = makeStyles(newStyles);

// Define a default UI for filtering
function DefaultColumnFilter({
                                 column: {filterValue, preFilteredRows, setFilter},
                             }) {
    const count = preFilteredRows.length;

    return (
        <CustomInput
            formControlProps={{
                fullWidth: true,
            }}
            inputProps={{
                value: filterValue || "",
                onChange: (e) => {
                    setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                },
            }}
            error={false}
            inputId="tableSearch"
            title="Buscar"
        />
    );
}


function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, {keys: [(row) => row.values[id]]});
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

const defaultStyleWidth = {
    overflowX: "auto",
    minWidth: "60rem"
};

// Our table component
function Table({columns, data, removeLastColumn = false, styleWidth = defaultStyleWidth}) {
    const [numberOfRows, setNumberOfRows] = React.useState(10);
    const [pageSelect, handlePageSelect] = React.useState(0);
    const classes = useStyles();
    const filterTypes = React.useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            fuzzyText: fuzzyTextFilterFn,
            // Or, override the default text filter to use
            // "startWith"
            text: (rows, id, filterValue) => {
                return rows.filter((row) => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true;
                });
            },
        }),
        []
    );

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        visibleColumns,
        nextPage,
        pageOptions,
        pageCount,
        previousPage,
        canPreviousPage,
        canNextPage,
        setPageSize,
        gotoPage,
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            filterTypes,
            initialState: {pageSize: 10, pageIndex: 0},
        },
        useFilters, // useFilters!
        useSortBy,
        usePagination
    );

    // We don't want to render all of the rows for this example, so cap
    // it for this use case
    // const firstPageRows = rows.slice(0, 10);
    let pageSelectData = Array.apply(
        null,
        Array(pageOptions.length)
    ).map(function () {
    });
    let numberOfRowsData = [5, 10, 20, 25, 50, 100];
    return (
        <div className={classes.mainContent}>
            <div className="ReactTable -striped -highlight">
                <div>
                    <div className="-pagination">
                        <div className="-previous">
                            <button
                                type="button"
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                                className="-btn"
                            >
                                Anterior
                            </button>
                        </div>
                        <div className="-center">
                            <Grid container className={classes.gridContainer} spacing={4}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <FormControl
                                        fullWidth
                                        className={
                                            classes.selectFormControl +
                                            " " +
                                            classes.formControlMargins
                                        }
                                    >
                                        <Select
                                            MenuProps={{
                                                className: classes.selectMenu,
                                            }}
                                            classes={{
                                                select: classes.select,
                                            }}
                                            value={pageSelect}
                                            onChange={(event) => {
                                                gotoPage(event.target.value);
                                                handlePageSelect(event.target.value);
                                            }}
                                            inputProps={{
                                                name: "pageSelect",
                                                id: "page-select",
                                            }}
                                        >
                                            {
                                                pageSelectData.length > 0 ? (
                                                    pageSelectData.map((prop, key) => {
                                                        return (
                                                            <MenuItem
                                                                key={key}
                                                                classes={{
                                                                    root: classes.selectMenuItem,
                                                                    selected: classes.selectMenuItemSelected,
                                                                }}
                                                                value={key}
                                                            >
                                                                Página {key + 1}
                                                            </MenuItem>
                                                        );
                                                    })
                                                ) : (
                                                    <MenuItem
                                                        key={"nOkey000"}
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected,
                                                        }}
                                                        value={0}
                                                    >
                                                        Sin páginas para mostrar
                                                    </MenuItem>
                                                )
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <FormControl
                                        fullWidth
                                        className={
                                            classes.selectFormControl +
                                            " " +
                                            classes.formControlMargins
                                        }
                                    >
                                        <Select
                                            MenuProps={{
                                                className: classes.selectMenu,
                                            }}
                                            classes={{
                                                select: classes.select,
                                            }}
                                            value={numberOfRows}
                                            onChange={(event) => {
                                                setPageSize(event.target.value);
                                                setNumberOfRows(event.target.value);
                                            }}
                                            inputProps={{
                                                name: "numberOfRows",
                                                id: "number-of-rows",
                                            }}
                                        >
                                            {numberOfRowsData.map((prop) => {
                                                return (
                                                    <MenuItem
                                                        key={prop}
                                                        classes={{
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected,
                                                        }}
                                                        value={prop}
                                                    >
                                                        {prop} filas
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="-next">
                            <button
                                type="button"
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                                className="-btn"
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                    <table {...getTableProps()} className="rt-table">
                        <thead className="rt-thead -header">
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
                                {headerGroup.headers.map((column, key) => (
                                    removeLastColumn && key === headerGroup.headers.length - 1 ? (
                                        <th key={`nothing_${key}`}/>
                                    ) : (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className={classnames("rt-th rt-resizable-header", {
                                                "-cursor-pointer": headerGroup.headers.length - 1 !== key,
                                                "-sort-asc": column.isSorted && !column.isSortedDesc,
                                                "-sort-desc": column.isSorted && column.isSortedDesc,
                                            })}
                                        >
                                            <div className="rt-resizable-header-content">
                                                {column.render("Header")}
                                            </div>
                                        </th>
                                    )
                                ))}
                            </tr>
                        ))}
                        {/*Render the columns filter UI*/}
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
                                {headerGroup.headers.map((column, key) => (
                                    removeLastColumn && key === headerGroup.headers.length - 1 ? (
                                        <th key={`nothingDiv_${key}`}/>
                                    ) : (
                                        <th
                                            key={`nothingDivFilter_${key}`}
                                            className={classnames("rt-th rt-resizable-header")}
                                        >
                                            <div>
                                                {headerGroup.headers.length - 1 === key
                                                    ? null
                                                    : column.canFilter
                                                        ? column.render("Filter")
                                                        : null}
                                            </div>
                                        </th>
                                    )
                                ))}
                            </tr>
                        ))}
                        </thead>

                        <tbody {...getTableBodyProps()} className="rt-tbody">
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr
                                    {...row.getRowProps()}
                                    className={classnames(
                                        "rt-tr",
                                        {" -odd": i % 2 === 0},
                                        {" -even": i % 2 === 1}
                                    )}
                                >
                                    {row.cells.map((cell, index) => {
                                        if (removeLastColumn && index === row.cells.length - 1) {
                                            return (
                                                <td key={`td_nothing_${index}`}/>
                                            );
                                        }
                                        return (
                                            <td {...cell.getCellProps()} className="rt-td">
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
    return rows.filter((row) => {
        const rowValue = row.values[id];
        return rowValue >= filterValue;
    });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== "number";

export default Table;
