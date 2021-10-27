import React from 'react';
import {InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {materialSelectStyles} from "./styles/materialSelectStyles";
import {MaterialSelectInterface} from "./interfaces/MaterialSelectInterface";
import FormControl from "@material-ui/core/FormControl";

// @ts-ignore
const useStyles = makeStyles(materialSelectStyles);

export const MaterialSelect = ({
                                   list,
                                   id,
                                   name,
                                   onChange,
                                   subKey,
                                   title,
                                   value,
                                   multiple = false,
                                   hasError = false,
                                   enable = true,
                               }: MaterialSelectInterface) => {
    const classes = useStyles();

    return (
        <FormControl
            fullWidth
            className={classes.selectFormControl}
        >
            <InputLabel
                htmlFor={id}
                className={(hasError ? classes.selectLabelWithError : classes.selectLabel)}
            >
                {title}
            </InputLabel>
            <Select
                multiple={multiple}
                MenuProps={{
                    className: classes.selectMenu,
                }}
                disabled={!enable}
                classes={{
                    select: classes.select,
                }}
                value={value}
                onChange={onChange}
                inputProps={{
                    name: name,
                    id: id
                }}
            >
                {
                    list.map(e => (
                            <MenuItem
                                key={subKey + e[id]}
                                classes={{
                                    root: classes.selectMenuItem,
                                    selected: multiple
                                        ? classes.selectMenuItemSelectedMultiple
                                        : classes.selectMenuItemSelected
                                }}
                                value={e[id]}
                            >
                                {e[name]}
                            </MenuItem>
                        )
                    )
                }
            </Select>
        </FormControl>
    );
};

/**Example**/

/*
create class
class Category {
    categoryName?: string;
    categoryId?: number;

    constructor(categoryName?: string, categoryId?: number) {
        this.categoryName = categoryName;
        this.categoryId = categoryId;
    }
}
create list or request from server
const selectTestList: Array<Category> = [
    {
        categoryName: "categoria1",
        categoryId: 1
    },
    {
        categoryName: "categoria2",
        categoryId: 2
    },
    {
        categoryName: "categoria3",
        categoryId: 3
    },
];*/

/*In functional componente create*/
/*
State constants

const [categorySelect, setCategorySelect] = useState(selectTestList[0]);
const isMounted = useIsMounted();

function to handle select event

const handleCategoryChange = (e: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    const id = e.target.value;
    const categoryId = parseInt(id as string);
    const category = selectTestList.find(e => e.categoryId === categoryId);
    if (category && isMounted.current) {
        const categoryObj = {categoryId, categoryName: category.categoryName ?? ""};
        setCategorySelect({...categoryObj});
    }
};

Add component to return content

<MaterialSelect
    title="Selecciona la categoría"
    value={categorySelect.categoryId ?? ""}
    onChange={handleCategoryChange}
    name="categoryName"
    id="categoryId"
    list={selectTestList}
    subKey="category"
/>

*/
