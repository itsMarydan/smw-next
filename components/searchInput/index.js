import classes from "./serchInput.module.css";

export default function SearchInput() {

    return (
        <>
            <div className={classes.form}>
                <form name="search">
                    <input placeholder="Search...." type="text"/>
                </form>
            </div>
        </>
    )
}