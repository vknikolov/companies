import classes from "./Layout.module.css";

const Layout = ({children}) => {
    return (
        <section className={classes.container}>{children}</section>
    )
}


export default Layout;